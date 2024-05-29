import registerSchemaValidation from "./joi/users/register.js";
import loginSchemaValidation from "./joi/users/login.js";
import editUserSchemaValidation from "./joi/users/editUser.js";
import deleteUserSchemaValidation from "./joi/users/deleteUser.js";
import patchIsBizSchemaValidation from "./joi/users/patchIsBiz.js";
import objectIdSchemaValidation from "./joi/objectId.validation.js";
import createCardSchemaValidation from "./joi/cards/card.validation.js"

const VALIDATION = "joi";

const registerValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return registerSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const loginValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return loginSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const editUserValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return editUserSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const deleteUserValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return deleteUserSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const patchIsBizValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return patchIsBizSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const objectIdValidation = (objectId) => {
  if (VALIDATION === "joi") {
    return objectIdSchemaValidation(objectId);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const createCardValidation = (cardInput) => {
  if (VALIDATION === "joi") {
    return createCardSchemaValidation(cardInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};



export { registerValidation, loginValidation, editUserValidation ,deleteUserValidation ,patchIsBizValidation, objectIdValidation ,createCardValidation};
