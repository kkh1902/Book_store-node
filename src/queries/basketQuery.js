exports.itemDetail = 'select a.basket_basket_uid, a.books_book_uid, a.basket_book_amount, b.book_uid, b.book_name, b.book_stock, b.book_price, b.book_writer from basket_list a, books b where a.books_book_uid = b.book_uid and a.basket_basket_uid=?'
exports.basketDetail = 'select * from basket where users_user_id=? order by basket_date'
exports.addBasket = 'insert into basket(basket_uid, basket_date, users_user_id) values(?, ?, ?)'
exports.addItem = 'insert into basket_list(basket_basket_uid, books_book_uid, basket_book_amount) values(?, ?, ?)'
exports.deleteItem = 'delete from basket_list where basket_basket_uid=? and books_book_uid=?'
// exports.deleteItem2 = 'delete from basket_lists where baskets_basket_uid=?'
// exports.deleteBasket = 'delete from baskets where basket_uid=?'r
