const TrailerHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'trailer',
  version: '1.0.0',
  register: async (server, { service }) => {
    const trailerHandler = new TrailerHandler(service);

    server.route(routes(trailerHandler));
  },
};
