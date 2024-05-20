const Sleep = require('../models/sleepModel');

exports.createSleepRecord = async (req, res) => {
    const { userId, hours, timestamp } = req.body;
    if (!userId || !hours || !timestamp) {
        return res.status(400).json({ error: 'userId, hours, and timestamp are required' });
    }
    try {
        const newRecord = new Sleep({ userId, hours, timestamp });
        await newRecord.save();
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({ error: 'Error saving sleep record' });
    }
};

exports.getSleepRecordsByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const records = await Sleep.find({ userId }).sort('timestamp');
        res.status(200).json(records);
    } catch (error) {
        res.status(404).json({ error: 'Error retrieving sleep records' });
    }
};

exports.deleteSleepRecord = async (req, res) => {
    const { recordId } = req.params;
    try {
        const result = await Sleep.findByIdAndDelete(recordId);
        if (!result) {
            return res.status(404).json({ error: 'Record not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: 'Error deleting sleep record' });
    }
};
