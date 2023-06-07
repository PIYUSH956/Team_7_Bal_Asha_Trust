const Process = require('../models/process');
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