const Case = require('../models/case');
const Child = require('../models/childSchema');
const Fake = require('../models/fake');
const Process = require('../models/process');

exports.assignCase = async (req, res) => {


    console.log(req.body);

    try {
        const newCase = await Case.create(req.body);
        const x = await Child.findOneAndUpdate({ _id: req.body.childID }, { $set: { status: "assigned" } })
        res.status(201).send(newCase);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Already Assigned to Other Volunteer" });
    }

};

exports.assignedCase = async (req, res) => {


    console.log(req.body);

    try {




        const x = await Case.find({ assignedWorkerID: req.body.assignedWorkerID }).populate({
            path: "childID",
            match: { status: "assigned" }
        });
        console.log(x);
        res.status(201).send(x);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Already Assigned to Other Volunteer" });
    }

};

exports.fakeApiController = async (req, res) => {

    try {
        const x = await Fake.create(req.body);
        console.log("IMAGE UPLOADED");
        return res.status(200).json(x);
    } catch (err) {
        return res.status(400).json(err);
    }

}

exports.onGoingCases = async (req, res) => {


    console.log(req.body);

    try {

        const x = await Process.find({}).populate({
            path: "caseID",
            match: { assignedWorkerID: req.body.assignedWorkerID },
            populate: {
                path: "childID",
                match: { status: "onGoing" }
            }
        }
        );
        console.log(x);
        res.status(201).send(x);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Already Assigned to Other Volunteer" });
    }

};