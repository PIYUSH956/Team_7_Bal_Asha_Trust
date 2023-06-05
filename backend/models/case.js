const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const caseSchema = new mongoose.Schema(
  {
    caseManagerID: {
      type: String,
      required: true,
    },
    childID: {
        type: String,
        required: true,
    },
    assignedWorkerID: {
        type: String,
        required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Abandoned", "Parental Guidance", "Surrendered"],
    },
    progressStatus: {
      type: String,
      required: true,
    },
    // Add more important fields as needed
  },
  { timestamps: true }
);

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
