const ListHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'movie',
  version: '1.0.0',
  register: async (server, { service }) => {
    const listHandler = new ListHandler(service);

    server.route(routes(listHandler));
  },
};
