class LoginHandler {
  constructor(service) {
    this._service = service;
  }

  async getRequestTokenHandler() {
    const loginUrl = await this._service.getRequestToken();

    return loginUrl;
  }

  async createSessionHandler(request) {
    const { request_token, approved } = request.query;

    const session = await this._service.createSession(request_token, approved);

    return session;
  }
}

module.exports = LoginHandler;
