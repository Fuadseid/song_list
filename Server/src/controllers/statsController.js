const { getAllStats } = require('../services/statsService');

const getStats = async (req, res) => {
  try {
    const stats = await getAllStats();
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = { getStats };