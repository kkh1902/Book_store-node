//도서 추가
exports.addBook = 'insert into books(book_name, book_stock, book_price, book_writer) values (?, ?, ?, ?)'
// //도서 수정
// exports.updateBook = 'update books set book_name=?, book_stock=?, book_price, book_writer=? where book_uid=?'
//도서 삭제
exports.deleteBook = 'delete from books where book_uid=?'
//도서 목록
exports.bookList = 'select * from books'
//도서 상세보기
exports.bookDetail = 'select * from books where book_uid=?'