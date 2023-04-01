/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');
// eslint-disable-next-line linebreak-style

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
