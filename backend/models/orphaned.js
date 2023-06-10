const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;




const orphaned = new mongoose.Schema(
  {
    steps: [{
      name: {
          type:String,
          unique:true,
          required:true,
      },
      type:{
          enum:["text","pdf"],
          type:String,
          required:true,
      },
      description:{
        type:String,
        unique:true,
      },
      step:{
           type:Number,
           required:true,
      },part:{
          type:Number,
          required:true,
      },
    }]
  },
  { timestamps: true }
);

const Orphaned = mongoose.model("Orphaned", orphaned);

module.exports = Orphaned;
