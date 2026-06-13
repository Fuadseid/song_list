const Song = require('../models/Song');

const getAllStats = async () => {
  const result = await Song.aggregate([
    {
      $facet: {
        totalSongs: [{ $count: 'count' }],
        totalArtists: [{ $group: { _id: '$artist' } }, { $count: 'count' }],
        totalAlbums: [{ $group: { _id: '$album' } }, { $count: 'count' }],
        totalGenres: [{ $group: { _id: '$genre' } }, { $count: 'count' }],
        
        songsPerGenre: [
          { $group: { _id: '$genre', count: { $sum: 1 } } },
          { $sort: { count: -1 } }
        ],
        songsPerArtist: [
          { $group: { _id: '$artist', count: { $sum: 1 } } },
          { $sort: { count: -1 } }
        ],
        songsPerAlbum: [
          { $group: { _id: '$album', count: { $sum: 1 } } },
          { $sort: { count: -1 } }
        ],
        albumsPerArtist: [
          { $group: { _id: { artist: '$artist', album: '$album' } } },
          { $group: { _id: '$_id.artist', count: { $sum: 1 } } },
          { $sort: { count: -1 } }
        ]
      }
    }
  ]);

  const data = result[0];
  
  const transformToObject = (arr, keyField = '_id', valueField = 'count') => {
    return arr.reduce((acc, item) => {
      acc[item[keyField]] = item[valueField];
      return acc;
    }, {});
  };

  return {
    totalSongs: data.totalSongs[0]?.count || 0,
    totalArtists: data.totalArtists[0]?.count || 0,
    totalAlbums: data.totalAlbums[0]?.count || 0,
    totalGenres: data.totalGenres[0]?.count || 0,
    songsPerGenre: transformToObject(data.songsPerGenre),
    songsPerArtist: transformToObject(data.songsPerArtist),
    songsPerAlbum: transformToObject(data.songsPerAlbum),
    albumsPerArtist: transformToObject(data.albumsPerArtist)
  };
};

module.exports = { getAllStats };