const Process = require('../models/process');
const AdmittedInCCI = require('../models/admittedInCCI');
const Case = require('../models/case');
const Child = require('../models/childSchema');
var uniqueID = "6483fb5e8f6a53f4fa7806fb";



exports.addAdmittedInCCI = async (req, res) => {
    const processData = req.body;
    const num = req.body.num;
    delete (req.body.num);
    req.body.step = Number(req.body.step);
    req.body.part = Number(req.body.part);
    console.log(req.body);
    try {

        const cnt = await AdmittedInCCI.countDocuments({});


        if (cnt == 0) {

            console.log("ONE");

            const process = await AdmittedInCCI.create({
                $push: {
                    steps: req.body
                }
            }
            );
            return res.status(200).json(process);

        } else {

            const process = await AdmittedInCCI.findOneAndUpdate({ _id: uniqueID }, {
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

exports.deleteAdmittedInCCI= async (req, res) => {
    const processData = req.body;

    console.log(req.body);
    try {

        const x = await AdmittedInCCI.findOne({ _id: uniqueID });
        console.log(x);
        if (x.steps != null && x.steps.length == 1) {
            return res.status(400).json({ message: "Steps can not be empty" });
        } else {
            const process = await AdmittedInCCI.findOneAndUpdate({}, {
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


exports.getAdmittedInCCI= async (req, res) => {

    try {
        const process = await AdmittedInCCI.find({})
        res.status(201).send(process);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create process' });
    }
};
