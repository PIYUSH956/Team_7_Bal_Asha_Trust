const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//SCHEMA FOR USER
const ChildSchema = new mongoose.Schema({
    state: {
        type: String,
        require: true,
    },
    district: {
        type: String,
        require: true,
    },
    shelter: {
        type: String,
        require: true,
    },
    childName: {
        type: String,
        require: true,
    },
    caseNumber: {
        type: String,
        require: true,
        //AUTO GENERATE FORMAT BAT/REGNO/NAME
    },
    gender: {
        type: String,
        require: true,
        enum: ['female', 'male']
    },
    dateOfBirth: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
        validate: {
            validator: function (v) {
                return v < 18 &&  v >= 0;
            },
            message: 'Value must be less than 18 and greater then 0'
        }
    },
    image: {
        type: String

    },
    childClassification: {
        type: String,
        require: true,
    },
    reasonForAdmission: {
        type: String,
    }, reasonForFlagging: {
        type: String,
        require: true,
    }, lastVisitSince: {
        type: String,
        require: true,
    }, lastCallSince: {
        type: String,
        require: true,
    }, guardian: {
        type: String,
        require: true,
    }, siblingDetails: {
        type: String,
        require: true
    }, totalShelterHomeStay: {
        type: String,
        require: true,
        // Year and month input
    }, lastReviewDate: {
        type: String,
        requre: true,
    }, lastChildWelfareCommiteOrder: {
        type: String,
        require: true,
    }, caseHistory: {
        type: String,
        require: true,
    }, documentCompleted: {
        type: String,

    }, documentPending: {
        type: String,

    }, newsPaperPublicationPending: {
        type: String,
        require: true,
    }, policeReportPending: {
        type: String,
        require: true,
    }, surrenderPending: {
        type: String,
        require: true,
    }, status:{
        type:String,
        enum:["assigned","notAssigned","completed"],
        default:"notAssigned"
    }
},
    { timestamps: true }
);

const Child = mongoose.model('Child', ChildSchema);
module.exports = Child;