import express from "express";
import {
  createCardController,
  getAllCardsController,
  getCardByIdController,
  getMyCardsController,
  updateCardController,
  patchLikeController,
  patchBizNumberController,
  deleteCardController,
} from "../../controllers/cards.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isBizMiddleware from "../../middlewares/isBiz.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import adminOrBizMiddleware from "../../middlewares/adminOrBiz.mw.js";
import { createCardValidation } from "../../validation/validationAdapter.js";
import isAdminMiddleware from "../../middlewares/adminOnly.mw.js";
const router = express.Router();

//http://localhost:3030/api/cards
router.get("/", getAllCardsController);

router.get("/my-cards", authMiddleware, getMyCardsController);

router.get("/:id", getCardByIdController);

router.post(
  "/",
  authMiddleware,
  isBizMiddleware,
  bodyValidationMiddleware(createCardValidation),
  createCardController
);

router.put("/:id",
  objectIdParamsValidationMiddleware,
  bodyValidationMiddleware(createCardValidation),
  updateCardController
  );

  router.patch(
    "/:id",
    authMiddleware,
    patchLikeController
  );

  router.patch(
    "/biz-number/:id",
    authMiddleware,
    objectIdParamsValidationMiddleware,
    isAdminMiddleware,
    patchBizNumberController
  );

  router.delete(
    "/:id",
    authMiddleware,
    objectIdParamsValidationMiddleware,
    adminOrBizMiddleware,
    deleteCardController
  );

export default router;

