const Song = require('../models/Song');

const createSong = async (songData) => {
  const song = new Song(songData);
  await song.save();
  return song;
};

const getAllSongs = async () => {
  return await Song.find().sort({ createdAt: -1 });
};

const getSongById = async (id) => {
  return await Song.findById(id);
};

const updateSong = async (id, updateData) => {
  return await Song.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });
};

const deleteSong = async (id) => {
  return await Song.findByIdAndDelete(id);
};

module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong
};