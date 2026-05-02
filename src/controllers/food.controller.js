const StorageService = require("../services/storage.service");
const uuid = require("uuid");
const foodModel = require("../models/food.model");

async function createFood(req, res) {
  //   console.log(req.foodPartner);
  const result = await StorageService.uploadFile(
    req.file.buffer.toString("base64"),
  );
  console.log(req.file);

  const food = await foodModel.create({
    name: req.body.name,
    video: result.url,
    foodPartner: req.foodPartner._id,
  });

  res.status(201).json({
    message: "Fooditem created successfully",
    food: food,
  });
}

async function getAllFood(req, res) {
  try {
    const allFoods = await foodModel.find();
    res.status(200).json({
      message: "All foods fetched successfully",
      foods: allFoods,
    });
  } catch (err) {
    res.status(401).json({
      message: "Failed to fetch foods",
      s,
    });
  }
}

module.exports = {
  createFood,
  getAllFood,
};
