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
    shelterHome: {
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
                return v < 18;
            },
            message: 'Value must be less than 18.'
        }
    },
    image: {
        type: String
    },
    childClassification: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    }, reason_for_admission: {
        type: String,
    }, reasong_for_flagging: {
        type: String,
        require: true,
    }, last_visit_since: {
        type: String,
        require: true,
    }, last_call_since: {
        type: String,
        require: true,
    }, guardian: {
        type: String,
        require: true,
    }, sibling_details: {
        type: String,
        require: true
    }, total_shelter_home_stay: {
        type: String,
        require: true,
        // Year and month input
    }, cwc_last_review: {
        type: String,
        requre: true,
    }, last_cwc_order: {
        type: String,
        require: true,
    }, case_history: {
        type: String,
        require: true,
    }, documents_completed: {
        type: String,

    }, documents_pending: {
        type: String,

    }, newspaper_publication_pending: {
        type: String,
        require: true,
    }, final_police_report_pending: {
        type: String,
        require: true,
    }, surrender_pending: {
        type: String,
        require: true,
    },
},
    { timestamps: true }
);

const Child = mongoose.model('Child', ChildSchema);
module.exports = Child;