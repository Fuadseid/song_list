const songService = require('../services/songService');

const createSong = async (req, res) => {
  try {
    const song = await songService.createSong(req.body);
    res.status(201).json({
      success: true,
      data: song
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

const getAllSongs = async (req, res) => {
  try {
    const songs = await songService.getAllSongs();
    res.json({
      success: true,
      data: songs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

const updateSong = async (req, res) => {
  try {
    const song = await songService.updateSong(req.params.id, req.body);
    if (!song) {
      return res.status(404).json({
        success: false,
        error: 'Song not found'
      });
    }
    res.json({
      success: true,
      data: song
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

const deleteSong = async (req, res) => {
  try {
    const song = await songService.deleteSong(req.params.id);
    if (!song) {
      return res.status(404).json({
        success: false,
        error: 'Song not found'
      });
    }
    res.json({
      success: true,
      message: 'Song deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  createSong,
  getAllSongs,
  updateSong,
  deleteSong
};