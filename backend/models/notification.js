const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const notification = new mongoose.Schema(
  {
    workerID: {
        type: String,
        required: true,
      },
   message:{
    type: String,
    require: true,
   },
   seen:{
    type:Boolean,
    default : false,
   },
   date: { type: Date, default: Date.now },
   
  }
);
const Notification = mongoose.model("Notification", notification);

module.exports = Notification;