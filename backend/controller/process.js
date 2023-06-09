const Process = require('../models/process');
const Abandond = require('../models/abandond');
const Case = require('../models/case');
const Child = require('../models/childSchema');
var uniqueID = "648053ce4add97f02977923b";



exports.addAbandon = async (req, res) => {
    const processData = req.body;
    const num = req.body.num;
    delete (req.body.num);
    req.body.step = Number(req.body.step);
    req.body.part = Number(req.body.part);
    console.log(req.body);
    try {

        const cnt = await Abandond.countDocuments({});


        if (cnt == 0) {

            console.log("ONE");

            const process = await Abandond.create({
                $push: {
                    steps: req.body
                }
            }
            );
            return res.status(200).json(process);

        } else {

            const process = await Abandond.findOneAndUpdate({ _id: uniqueID }, {
                $push: {
                    steps: {
                        $each: [req.body], $position: Number(num)
                    }
                }
            }
            );
            console.log(process);
            res.status(201).send(process);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create process' });
    }
};

exports.deleteAbandon = async (req, res) => {
    const processData = req.body;

    console.log(req.body);
    try {

        const x = await Abandond.findOne({ _id: uniqueID });
        console.log(x);
        if (x.steps != null && x.steps.length == 1) {
            return res.status(400).json({ message: "Steps can not be empty" });
        } else {
            const process = await Abandond.findOneAndUpdate({}, {
                $pull: {
                    steps: {
                        name: req.body.nameD
                    }
                }
            }
            );
            console.log(process);
            res.status(201).send(process);
        }

    } catch (error) {
        res.status(500).json({ error: 'Failed to create process' });
    }
};


exports.getAbandon = async (req, res) => {

    try {
        const process = await Abandond.find({})
        res.status(201).send(process);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create process' });
    }
};

// exports.updateAbandon = async (req, res) => {
//     const processData = req.body;

//     console.log(req.body);
//     try {

//         const x = await Abandond.findOne({ _id: uniqueID });
//         console.log(x);
//         if (x.steps != null && x.steps.length == 1) {
//             return res.status(400).json({ message: "Steps can not be empty" });
//         } else {
//             const process = await Abandond.findOneAndUpdate({}, {
//                 $pull: {
//                     steps: {
//                         name: req.body.nameD
//                     }
//                 }
//             }
//             );
//             console.log(process);
//             res.status(201).send(process);
//         }

//     } catch (error) {
//         res.status(500).json({ error: 'Failed to create process' });
//     }
// };


exports.getProcess = async (req, res) => {
    const category = req.body.category;
    console.log(req.body);
    if (category == "abandoned") {
        try {
            const process = await Abandond.find({});
            return res.status(200).json(process);
        }
        catch (err) {
            return res.status(400).json(err);
        }
    }
}



exports.updateProcess = async (req, res) => {

    console.log(req.body);
    const category = req.body.category;
    const assignedWorkerID = req.body.assignedWorkerID;
    const childID = req.body.childID;
    if (category == "abandoned") {

        try {
            var caseID = await Case.findOne({ childID, assignedWorkerID });
            if (caseID == null) {
                return res.status(400).json({ message: "Case Not Assigned" });
            }
            await Child.findOneAndUpdate({ _id: childID }, { $set: { status: "onGoing" } });
            caseID = caseID._id;
            const proc = await Process.findOne({ caseID });
            
            if (proc == null) {
                const newProcess = {
                    caseID,
                    data: req.body.payload
                }
                const result = await Process.create(newProcess);

                return res.status(200).json({ message: "Successfully Saved" });
            }
            else {
                const existingData = proc.data.find(item => item.name == req.body.payload.name);
                if (existingData) {
                    if (req.body.payload.date != null) {
                        existingData.date = req.body.payload.date;
                    }
                    if (req.body.payload.status != null) {
                        existingData.status = req.body.payload.status;
                    }
                    if (req.body.payload.value != null) {
                        existingData.value = req.body.payload.value;
                    }
                    const x = await proc.save();

                } else {




                    proc.data.push(req.body.payload);

              
                    const x = await proc.save();
        
                }
            }


            return res.status(200).json({ message: "Successfully Saved" });
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }

    return res.status(400).json();



}

exports.getDataInProcess = async (req, res) => {

    const assignedWorkerID = req.body.assignedWorkerID;
    const childID = req.body.childID;
    try {
        var caseID = await Case.findOne({ childID, assignedWorkerID });
        if (caseID == null) {
            return res.status(200).json();
        } else {
            const proc = await Process.findOne({ caseID: caseID._id });
            return res.status(200).json(proc);
        }
    } catch (err) {
        console.log(err);
    }
}

