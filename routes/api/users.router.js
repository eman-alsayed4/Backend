import express from "express";
import {
  loginController,
  registerController,
  updateUserController,
  deleteUserController,
  patchIsBizController,
  googleLoginController,
  getUserByIdController,
} from "../../controllers/users.controller.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import {
  loginValidation,
  registerValidation,
  editUserValidation,
  deleteUserValidation,
  patchIsBizValidation,
} from "../../validation/validationAdapter.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import adminOrOwn from "../../middlewares/adminOrOwn.mw.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectParamsValidation.mw.js";
import { getUserByIdMongo } from "../../model/mongodb/users/userService.js";


const router = express.Router();

// http://localhost:3030/api/users
router.get("/", (req, res) => {
  res.json("users sub route");
});
router.get("/:id", getUserByIdController
);

//router.get("/:id", updateUserController);

router.post(
  "/register",
  bodyValidationMiddleware(registerValidation),
  registerController
);

router.post(
  "/login",
  bodyValidationMiddleware(loginValidation),
  loginController
);

router.post(
  "/google-login",
  googleLoginController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  bodyValidationMiddleware(editUserValidation),
  updateUserController
);

router.delete("/:id",
 authMiddleware,
 objectIdParamsValidationMiddleware,
  adminOrOwn, 
  deleteUserValidation,
  deleteUserController
  );


  router.patch(
    "/:id",
    authMiddleware,
    objectIdParamsValidationMiddleware,
    adminOrOwn,
    patchIsBizValidation,
    patchIsBizController
  );
  
export default router;
