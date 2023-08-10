require('dotenv').config();
const fetch = require('node-fetch');

class LoginService {
  async getRequestToken() {
    const endpoint = `${process.env.TMDB_BASE_URL}/3/authentication/token/new`;

    const headers = {
      Authorization: `${process.env.ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    };

    const options = {
      method: 'GET',
      headers,
    };

    const data = await fetch(endpoint, options).then((res) => res.json());

    const { request_token } = data;

    const returnUrl = {
      url: `${process.env.BASE_LOGIN_URL}/authenticate/${request_token}?redirect_to=localhost:7000/createSession`,
    };

    return returnUrl;
  }

  async createSession(token, approved) {
    const endpoint = `${process.env.TMDB_BASE_URL}/3/authentication/session/new`;

    if (approved) {
      const queryParams = new URLSearchParams({
        api_key: `${process.env.API_KEY}`,
        request_token: `${token}`,
      });

      const session = await fetch(`${endpoint}?${queryParams.toString()}`).then((res) => res.json());

      return session;
    }

    return 'UserDenied';
  }
}

module.exports = LoginService;
