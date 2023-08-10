const routes = (handler) => [
  {
    method: 'GET',
    path: '/search/multi',
    handler: (request, h) => handler.multiSearchHandler(request, h),
  },
];

module.exports = routes;
