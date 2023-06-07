const Process = require('../models/process');
const Abandond = require('../models/abandond');
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
                    steps:  req.body  
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