const express = require("express");
const FoodController = require("../controllers/food.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();

//protected
router.post(
  "/",
  AuthMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  FoodController.createFood,
);

router.get("/", AuthMiddleware.authUserMiddleware, FoodController.getAllFood);

module.exports = router;
