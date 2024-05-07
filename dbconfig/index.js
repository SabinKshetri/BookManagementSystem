const mongoose = require("mongoose");
const connectString =
  "mongodb+srv://sabin191433:database@cluster0.pwxnec7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function databaseConnection() {
  await mongoose.connect(connectString);
  console.log("Db connected successfully !!");
}
module.exports = databaseConnection;
