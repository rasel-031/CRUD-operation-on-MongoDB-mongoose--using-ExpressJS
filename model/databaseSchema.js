const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test", (err) => {
  if (err) {
    console.log("Database is not connected.");
  } else {
    console.log("Database is connected.");
  }
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  uname: { type: String, required: true },
  upassword: { type: String, required: true },
  datetime: { type: Date, default: Date.now },
});

const data_model = mongoose.model("user", userSchema);

module.exports = data_model;
