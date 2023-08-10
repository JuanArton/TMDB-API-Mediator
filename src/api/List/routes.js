const routes = (handler) => [
  {
    method: 'GET',
    path: '/popular',
    handler: (request, h) => handler.getPopularListHandler(request, h),
  },
];

module.exports = routes;
