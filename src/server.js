require('dotenv').config();

const Hapi = require('@hapi/hapi');

const movie = require('./api/List');
const MovieService = require('./services/TMDB/ListService');

const trailer = require('./api/Trailer');
const TrailerService = require('./services/TMDB/TrailerService');

const search = require('./api/Search');
const SearchService = require('./services/TMDB/SearchService');

const login = require('./api/Login');
const LoginService = require('./services/TMDB/LoginService');

const ClientError = require('./exceptions/ClientError');

const init = async () => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: movie,
      options: {
        service: new MovieService(),
      },
    },
    {
      plugin: trailer,
      options: {
        service: new TrailerService(),
      },
    },
    {
      plugin: search,
      options: {
        service: new SearchService(),
      },
    },
    {
      plugin: login,
      options: {
        service: new LoginService(),
      },
    },
  ]);

  server.ext('onPreResponse', (request, h) => {
    const { response } = request;

    if (response instanceof Error) {
      if (response instanceof ClientError) {
        const newResponse = h.response({
          status: 'fail',
          message: response.message,
        });

        newResponse.code(response.statusCode);
        return newResponse;
      }

      if (!response.isServer) {
        return h.continue;
      }

      const newResponse = h.response({
        status: 'error',
        message: 'Terjadi kegagalan pada server kami',
      });

      newResponse.code(500);
      return newResponse;
    }

    return h.continue;
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
