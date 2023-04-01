/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
const books = require('./books');
const {nanoid} = require('nanoid');
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line linebreak-style

const PostBooksHandler = (request, h) => {
  // eslint-disable-next-line max-len
  const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.paylaod;
  const id = nanoid(9);
  if (pageCount===readPage) {
    finished : true;
  }
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const newBook = {
    // eslint-disable-next-line max-len
    id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt,
  };
  books.push(newBook);
  const berhasil = books.filter((book) => book.id === id).length > 0;
  if (berhasil) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }
  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }
  if (readPage > pageCount) {
    // eslint-disable-next-line no-unused-vars
    const response = h.reponse({
      status: 'fail',
      // eslint-disable-next-line max-len
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
  }
};

const getAllBooksHandler = () => ({
  status: 'success',
  data: {
    books,
  },
});

const getAllBooksHandlerById = (request, h) => {
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

// eslint-disable-next-line comma-spacing
const editBooksHandler = (request,h) => {
  const {id} = request.params;
  // eslint-disable-next-line max-len
  const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.paylaod;
  const insertedAt = new Date().toISOString();
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      // eslint-disable-next-line max-len
      name, year, author, summary, publisher, pageCount, readPage, reading, insertedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'gagal memperbarui buku. id tidak ditemukan',
  });
  response.code(404);
  return response;
  if (name == undefined) {
    const response = h.response({
      status: 'fail',
      message: 'gagal memperbarui buku. mohon isi naman buku',
    });
    response.code(400);
    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      // eslint-disable-next-line max-len
      message: 'gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }
};

const deleteBooksHandler = (request, h) => {
  const {id} = request.params;
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'buku gagal dihapus. id tidak ditemukan',
  });
  response.code(404);
  return response;
};
// eslint-disable-next-line linebreak-style, max-len
module.exports = {PostBooksHandler, getAllBooksHandler, getAllBooksHandlerById, editBooksHandler, deleteBooksHandler};
