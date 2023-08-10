class ListHandler {
  constructor(service) {
    this._service = service;
  }

  async getPopularListHandler(request, h) {
    const { mode, language, page } = request.query;

    const movieList = await this._service.getPopularList(mode, language, page);

    return movieList;
  }
}

module.exports = ListHandler;
