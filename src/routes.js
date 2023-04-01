/* eslint-disable linebreak-style */
// eslint-disable-next-line max-len
const {PostBooksHandler, getAllBooksHandler, getAllBooksHandlerById, editBooksHandler, deleteBooksHandler} = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: PostBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getAllBooksHandlerById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooksHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksHandler,
  },
];

module.exports = routes;
