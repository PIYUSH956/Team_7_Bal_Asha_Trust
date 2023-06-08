const Process = require('../models/process');
const Abandond = require('../models/abandond');
const Case = require('../models/case');
var uniqueID = "648053ce4add97f02977923b";

exports.createProcess = async (req, res) => {
    const processData = req.body;
    processData.caseID = req.param.id;
    try {
        const process = await Process.create(processData);
        res.status(201).send(process);

    } catch (error) {
        res.status(500).json({ error: 'Failed to create process' });
    }
};



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
    if (category == "abandond") {
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
    const category = req.body.category;
   
    const name = req.body.payload.name;

    const caseID = await Case.findOne(req.body.forCaseID);
    console.log(caseID);



    // try {
    //     if (category == "abandond") {
    //         const check = await Process.findOne({ caseID });
    //         if (!check) {
    //             const newProcess = new Process({ caseID, data: [req.body.payload] });
    //             await newProcess.save();
    //         } else {

    //             const existingData = check.data.find(item => item.name === name);
    //             if (existingData) {
    //                 if (req.body.payload.date != null) {
    //                     existingData.date = req.body.payload.date;
    //                 }
    //                 if (req.body.payload.status != null) {
    //                     existingData.date = req.body.payload.status;
    //                 }
    //                 if (req.body.payload.value != null) {
    //                     existingData.date = req.body.payload.value;
    //                 }
    //                 await process.save();


    //             } else {
    //                 process.data.push({ name, type, step, part, date, status });
    //                 await process.save();
    //             }



    //         }
    //         return res.status(200).json({ message: "Updated" });
    //     } else if (category == "") {
    //     }
    // } catch (err) {
    //   console.log(err);
    //   return res.status(400).json({message:"Failed To Upload"});
    // }
}