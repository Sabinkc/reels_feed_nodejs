const express = require("express");
const AuthController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/user/register", AuthController.registerUser);
router.post("/user/login", AuthController.loginUser);

module.exports = router;
