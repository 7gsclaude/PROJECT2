//toodo write oute the store models schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema(
  {
    img: {
      type: String,
    },
    name: {
      type: String,
        },
    link: {
        type: String,
    },
  },
  { timestamps: true }
);
// todo fleesh out intro figure out logiccal routing of info

const Store = mongoose.model("Store", storeSchema);

module.exports = Store; // need to capitolize in order to make it valid
