const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const fakeSchema = new mongoose.Schema(
  {
    image: {
      type: String ,
      required: true,
    }
  },
  { timestamps: true }
);

const fake = mongoose.model("Fake", fakeSchema);

module.exports = fake;
