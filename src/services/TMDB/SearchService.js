require('dotenv').config();
const fetch = require('node-fetch');

class SearchService {
  async multiSearch(query, adult, lang, page) {
    const endpoint = `${process.env.TMDB_BASE_URL}/3/search/multi`;

    const queryParams = new URLSearchParams({
      query: `${query}`,
      include_adult: `${adult}`,
      api_key: `${process.env.API_KEY}`,
      language: `${lang}`,
      page: `${page}`,
    });

    const response = await fetch(`${endpoint}?${queryParams.toString()}`);
    const data = await response.json();

    return data;
  }
}

module.exports = SearchService;
