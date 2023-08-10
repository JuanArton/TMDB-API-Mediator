const routes = (handler) => [
  {
    method: 'GET',
    path: '/login',
    handler: () => handler.getRequestTokenHandler(),
  },
  {
    method: ['GET'],
    path: '/createSession',
    handler: (request) => handler.createSessionHandler(request),
  },
];

module.exports = routes;
