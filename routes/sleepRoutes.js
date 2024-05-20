const express = require('express');
const router = express.Router();
const sleepController = require('../controllers/sleepController');

router.post('/sleep', sleepController.createSleepRecord);
router.get('/sleep/:userId', sleepController.getSleepRecordsByUser);
router.delete('/sleep/:recordId', sleepController.deleteSleepRecord);

module.exports = router;
