/* eslint-disable linebreak-style */
/* eslint-disable key-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const books = require('./books');
const {nanoid} = require('nanoid');
// eslint-disable-next-line linebreak-style

const postBooksHandler = (request, h) => {
  const {name, year, author, summary, publisher, pageCount, readPage, reading} =request.payload;
  const id = nanoid(7);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  let finished = false;
  if (pageCount === readPage) {
    finished = true;
  };
  if (name == undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  };
  const newBook = {
    id, name, year, author, summary, publisher, pageCount, readPage, readPage, reading, finished, insertedAt, updatedAt,
  };
  books.push(newBook);
  const berhasil = books.filter((boo) => boo.id === id).length > 0;
  if (berhasil) {
    const response = h.response({
      status:'success',
      message:'Buku berhasil ditambahkan',
      data: {
        bookId : id,
      },
    });
    response.code(201);
    return response;
  }
};

const getBooksHandler = (request, h) => {
  // eslint-disable-next-line no-unused-vars
  const {id} = request.params;
  const response = h.response(
      {
        status: 'success',
        data: {
          books: books.map((book)=>({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          })),
        },
      },
  );
  response.code(200);
  return response;
};

const getBooksHandlerById = (request, h) => {
  const {id} = request.params;
  const book = books.filter((b) => b.id === id)[0];
  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};
module.exports = {postBooksHandler, getBooksHandler, getBooksHandlerById};
