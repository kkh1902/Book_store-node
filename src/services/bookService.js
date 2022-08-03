const db = require('../../middleware/db')
const bookQuery = require('../queries/bookQuery')

exports.addBook = async (book_name, book_stock, book_price, book_writer) => {

    try {
        let addBook = await db.query(bookQuery.addBook, [book_name, book_stock, book_price, book_writer])
        return addBook[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

// exports.updateBook = async (book_name, book_stock, book_price, book_writer, book_uid) => {

//     try {
//         let updateBook = await db.query(bookQuery.updateBook, [book_name, book_stock, book_price, book_writer, book_uid])
//         return updateBook[0]
//     }

//     catch (error) {
//         console.log(error)
//         throw Error(error)
//     }

// }

exports.deleteBook = async (book_uid) => {

    try {
        let del = await db.query(bookQuery.deleteBook, [book_uid])
        return del[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.bookList = async () => {

    try {
        let list = await db.query(bookQuery.bookList)
        return list[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.bookDetail = async (book_uid) => {

    try {
        let detail = await db.query(bookQuery.bookDetail, [book_uid])
        return detail[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}