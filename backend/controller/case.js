const Case = require('../models/case');

exports.assignCase = async (req, res) => {

    const caseData = req.body;
    caseData.caseManagerID=req.param.id;
    
    try {
        const newCase = await Case.create(caseData);
        res.status(201).send(newCase);
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to create process' });
    }

};