const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const caseSchema = new mongoose.Schema(
  {
    caseManagerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true,
    },
    childID: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Child",
      required: true,
      unique:true,
    },
    assignedWorkerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true,
    },
    status:{
      type: String,
      required: true,
      enum:["onGoing","Completed"],
      default:"onGoing"
    }
    // Add more important fields as needed
  },
  { timestamps: true }
);

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
