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

//COMPLETION CONDITION CHECKING
exports.getValuePresent = async (req, res) => {
    const key = req.body.key;
    var childID = req.body.childID;
    console.log(key, childID);
    try {
        const caseID = await Case.find({childID},{"_id":1});
        console.log(caseID);
        childID = caseID[0]._id;
        const result = await Process.find({ childID, data: { $elemMatch: { name: key } } }, { "data.$": 1 });
        //    console.log(result[0].data[0].status);
        
        if (result == null || result[0] == null || result[0].data[0] == null ) return res.status(200).json({ m: false });
        if (result != null && result[0].data[0].status == "completed") return res.status(200).json({ m: true });
        return res.status(200).json({ m: false });

    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err.message });
    }


}

exports.updateProcess = async (req, res) => {

    console.log(req.body);
    const category = req.body.category;
    const assignedWorkerID = req.body.assignedWorkerID;
    const childID = req.body.childID;
    const name = req.body.payload.name;
    if (category == "abandoned") {

        try {
            var caseID = await Case.findOne({ childID, assignedWorkerID });
            if (caseID == null) {
                return res.status(400).json({ message: "Case Not Assigned" });
            }
            await Child.findOneAndUpdate({ _id: childID }, { $set: { status: "onGoing" } });

            caseID = caseID._id;
            console.log(caseID);
            const proc = await Process.findOne({ caseID });
            console.log(proc);
            
            
            if (proc == null) {
                const newProc = new Process({ caseID: caseID });
                newProc.data.push(req.body.payload);

                newProc.save()
                    .then(savedProc => {
                        console.log(savedProc);
                    })
                    .catch(error => {
                        console.error(error);
                    });

                return res.status(200).json({ message: "Successfully Saved" });
            }
            else {
                const existingData = proc.data.find(item => item.name == req.body.payload.name);
                if (existingData) {
                    await Process.findOneAndUpdate({caseID, 'data.name': name}, {'$set': {
                        'data.$.status': req.body.payload.status,
                        'data.$.value': req.body.payload.value,
                        'data.$.date':req.body.payload.date
                    }})
                
                    return res.status(200).json({ message: "Successfully Saved" });
                }
                 else {

                    Process.findOneAndUpdate(
                        { caseID: caseID },
                        { $push: { data: req.body.payload } },
                        { new: true }
                    )
                        .then(updatedProc => {
                            console.log(updatedProc);
                        })
                        .catch(error => {
                            console.error(error);
                        });

                }
            


            return res.status(200).json({ message: "Successfully Saved" });
        }} catch (err) {
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
        var caseID = await Case.findOne({ childID });
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

