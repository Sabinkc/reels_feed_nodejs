const express = require("express");
const AuthRoutes = require("./routes/auth.routes");
const FoodRoutes = require("./routes/food.routes")
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", AuthRoutes);
app.use("/api/food",FoodRoutes);

module.exports = app;
