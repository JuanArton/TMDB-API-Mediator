const routes = (handler) => [
  {
    method: 'GET',
    path: '/trailer/{id}',
    handler: (request, h) => handler.getTrailerVideoHandler(request, h),
  },
];

module.exports = routes;
