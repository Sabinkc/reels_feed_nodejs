const mongoose = require("mongoose");

async function connectDb() {
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
    });
}

module.exports = connectDb;
