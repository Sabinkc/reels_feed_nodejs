const express = require("express");
const AuthController = require("../controllers/auth.controller");

const router = express.Router();

// user auth
router.post("/user/register", AuthController.registerUser);
router.post("/user/login", AuthController.loginUser);
router.get("/user/logout", AuthController.logoutUser);

//foodParter auth
router.post("/foodPartner/register", AuthController.registerFoodPartner);
router.post("/foodPartner/login", AuthController.loginFoodPartner);
router.get("/foodPartner/logout", AuthController.logoutFoodPartner);

module.exports = router;
