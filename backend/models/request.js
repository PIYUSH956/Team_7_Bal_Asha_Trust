const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const request = new mongoose.Schema(
  {
      
      childID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Child",
        required: true,
        unique:true,
      },
      caseNumber:{
          type:String,
      },
      childName:{
       type:String,
       default:""
      },
      note:{
        type:String,
      },
      assignedWorkerName: {
        type: String,
        required: true,
      },
      status:{
        type: String,
        required: true,
        enum:["request","parentFound"],
        default:"request"
      }

  });

const Request = mongoose.model("Request", request);

module.exports = Request;
