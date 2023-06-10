const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;




const abandond = new mongoose.Schema(
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

const Abandond = mongoose.model("Abandond", abandond);

module.exports = Abandond;
