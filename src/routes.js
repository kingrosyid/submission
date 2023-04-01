/* eslint-disable linebreak-style */
// eslint-disable-next-line max-len
const {postBooksHandler, getBooksHandler, getBooksHandlerById} = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: postBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksHandlerById,
  },
];

module.exports = routes;
