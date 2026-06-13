const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');
const statsController = require('../controllers/statsController');

router.post('/songs', songController.createSong);
router.get('/songs', songController.getAllSongs);
router.put('/songs/:id', songController.updateSong);
router.delete('/songs/:id', songController.deleteSong);

router.get('/songs/stats', statsController.getStats);

module.exports = router;