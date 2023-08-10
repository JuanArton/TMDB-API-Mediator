class TrailerHandler {
  constructor(service) {
    this._service = service;
  }

  async getTrailerVideoHandler(request, h) {
    const { id } = request.params;
    const { mode, language } = request.query;

    const movieList = await this._service.getTrailerVideo(mode, id, language);

    return movieList;
  }
}

module.exports = TrailerHandler;
