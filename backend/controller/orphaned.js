const Process = require('../models/process');
const Orphaned = require('../models/orphaned');
const Case = require('../models/case');
const Child = require('../models/childSchema');
var uniqueID = "648386e8611892b7f06e4648";



exports.addOrphaned = async (req, res) => {
    const processData = req.body;
    const num = req.body.num;
    delete (req.body.num);
    req.body.step = Number(req.body.step);
    req.body.part = Number(req.body.part);
    console.log(req.body);
    try {

        const cnt = await Orphaned.countDocuments({});
       console.log("cnt"+cnt);

        if (cnt == 0) {

            console.log("ONE");

            const process = await Orphaned.create({
                $push: {
                    steps: req.body
                }
            }
            );
            console.log(process);
            return res.status(200).json(process);

        } else {

            const process = await Orphaned.findOneAndUpdate({ _id: uniqueID }, {
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

exports.deleteOrphaned = async (req, res) => {
    const processData = req.body;

    console.log(req.body);
    try {

        const x = await Orphaned.findOne({ _id: uniqueID });
        console.log(x);
        if (x.steps != null && x.steps.length == 1) {
            return res.status(400).json({ message: "Steps can not be empty" });
        } else {
            const process = await Orphaned.findOneAndUpdate({}, {
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


exports.getOrphaned= async (req, res) => {

    try {
        const process = await Orphaned.find({})
        res.status(201).send(process);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create process' });
    }
};
