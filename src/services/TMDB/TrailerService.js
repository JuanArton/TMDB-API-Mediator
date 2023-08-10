require('dotenv').config();
const fetch = require('node-fetch');

class TrailerService {
  async getTrailerVideo(mode, id, lang) {
    const endpoint = `${process.env.TMDB_BASE_URL}/3/${mode}/${id}/videos`;

    const queryParams = new URLSearchParams({
      api_key: `${process.env.API_KEY}`,
      language: `${lang}`,
    });

    const response = await fetch(`${endpoint}?${queryParams.toString()}`);
    const data = await response.json();

    return data;
  }
}

module.exports = TrailerService;
