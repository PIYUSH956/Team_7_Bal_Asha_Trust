const Case = require('../models/case');
const Child = require('../models/childSchema');
const Fake = require('../models/fake');
const Process = require('../models/process');

exports.assignCase = async (req, res) => {


    console.log(req.body);
    const workerID=req.body.assignedWorkerID;
    const message="New Child case is assigned to you ";
    try {

        const newCase = await Case.create(req.body);
        const x = await Child.findOneAndUpdate({ _id: req.body.childID }, { $set: { status: "assigned" } })
        const notification = new Notification({workerID,message});
        const data = await notification.save();
        //assignedWorkerID
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
        }).select("-image");
        console.log(x);
        res.status(201).send(x);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Already Assigned to Other Volunteer" });
    }

};

exports.getAssignAndNotGoing= async (req, res) => {


    console.log(req.body);

    try {
        const x = await Case.find({ assignedWorkerID: req.body.assignedWorkerID }).populate({
            path: "childID",
            match:{
                $or:[{status:"assigned"}]
            }
        }).select("-image");
        console.log(x);
        res.status(201).send(x);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Already Assigned to Other Volunteer" });
    }

};

exports.getAllCaseForRoot = async (req, res) => {

    console.log(req.body);

    try {
        const x = await Case.find({ assignedWorkerID: req.body.assignedWorkerID }).populate({
            path: "childID",
            match:[]
        });
        console.log(x);
        res.status(201).send(x);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Already Assigned to Other Volunteer" });
    }

}

exports.getOnGoingChildDataForAdmin = async (req, res) => {

    try {
        const abc = await Child.find({ $or: [{ status: "assigned" }, { status: "onGoing" }] })
        return res.status(200).json(abc);
    } catch (err) {
        return res.status(400).json(err);
    }

}

exports.getPendingChildDataForAdmin = async (req, res) => {

    try {
        const abc = await Child.find({ $or: [{ status: "notAssigned" }] })
        return res.status(200).json(abc);
    } catch (err) {
        return res.status(400).json(err);
    }

}

exports.getAssignCaseForDashboard = async (req, res) => {


    console.log(req.body);

    try {
        const x = await Case.find({ assignedWorkerID: req.body.assignedWorkerID }).populate({
            path: "childID",
        }).select("-image");
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

exports.completedCase = async (req, res) => {


    console.log(req.body);

    try {

        const x = await Process.find({}).populate({
            path: "caseID",
            match: { assignedWorkerID: req.body.assignedWorkerID },
            populate: {
                path: "childID",
                match: { status: "completed" }
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