const foodPartnerModel = require("../models/foodpartner.model");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function authFoodPartnerMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const foodPartner = await foodPartnerModel.findById(decoded.id);
    console.log(foodPartner);

    req.foodPartner = foodPartner;
    next();
  } catch (err) {
    return res.status(400).json({
      message: "Unauthorized",
      err: err,
      token: token,
    });
  }
}

async function authUserMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const user = await userModel.findById(decoded.id);
    // console.log(user);

    req.user = user;
    next();
  } catch (err) {
    return res.status(400).json({
      message: "Unauthorized",
      err: err,
      token: token,
    });
  }
}

module.exports = {
  authFoodPartnerMiddleware,
  authUserMiddleware
};
