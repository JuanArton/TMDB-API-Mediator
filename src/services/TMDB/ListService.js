require('dotenv').config();
const fetch = require('node-fetch');

class MovieService {
  async getPopularList(mode, page, lang) {
    const endpoint = `${process.env.TMDB_BASE_URL}/3/${mode}/popular`;

    const queryParams = new URLSearchParams({
      api_key: `${process.env.API_KEY}`,
      language: `${lang}`,
      page: `${page}`,
    });

    const response = await fetch(`${endpoint}?${queryParams.toString()}`);
    const data = await response.json();

    return data;
  }
}

module.exports = MovieService;
