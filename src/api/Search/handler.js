class SearchHandler {
  constructor(service) {
    this._service = service;
  }

  async multiSearchHandler(request, h) {
    const {
      query,
      include_adult,
      language,
      page,
    } = request.query;

    const searchResult = await this._service.multiSearch(query, include_adult, language, page);

    return searchResult;
  }
}

module.exports = SearchHandler;
