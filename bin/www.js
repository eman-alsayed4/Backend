#!/usr/bin/env node

/**
 * Module dependencies.
 */

// var app = require('../app');
// var http = require('http');
import env from "dotenv";
env.config();
import app from "../app.js";
import connectToDb from "../model/dbAdapter.js";
import http from "http";
import chalk from "chalk";

import {
  initialUsers,
  initialCards,
} from "../initialData/initalDataService.js";

/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(3030);
app.set("port", 3030);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(3030);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === "string" ? addr : addr.port;
  console.log(chalk.green(`Listening on http://localhost:${bind}/`));
  connectToDb().then(async () => {
    //this function will be executed when i connected to db
    let bizId = await initialUsers();
    if (bizId) await initialCards(bizId);
  });
}