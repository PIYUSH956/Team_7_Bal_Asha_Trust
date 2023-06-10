const Process = require('../models/process');
const Surrendered = require('../models/surrendered');
const Case = require('../models/case');
const Child = require('../models/childSchema');
var uniqueID = "6483fe91c009e6919be7b3b5";



exports.addSurrendered = async (req, res) => {
    const processData = req.body;
    const num = req.body.num;
    delete (req.body.num);
    req.body.step = Number(req.body.step);
    req.body.part = Number(req.body.part);
    console.log(req.body);
    try {
        
        const cnt = await Surrendered.countDocuments({});


        if (cnt == 0) {

            console.log("ONE");

            const process = await Surrendered.create({
                $push: {
                    steps: req.body
                }
            }
            );
            return res.status(200).json(process);

        } else {

            const process = await Surrendered.findOneAndUpdate({ _id: uniqueID }, {
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

exports.deleteSurrendered= async (req, res) => {
    const processData = req.body;

    console.log(req.body);
    try {

        const x = await Surrendered.findOne({ _id: uniqueID });
        console.log(x);
        if (x.steps != null && x.steps.length == 1) {
            return res.status(400).json({ message: "Steps can not be empty" });
        } else {
            const process = await Surrendered.findOneAndUpdate({}, {
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


exports.getSurrendered= async (req, res) => {

    try {
        const process = await Surrendered.find({})
        res.status(201).send(process);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create process' });
    }
};
