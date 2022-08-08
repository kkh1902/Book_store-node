const db = require('../../middleware/db')
const orderQuery = require('../queries/orderQuery')

exports.addOrder = async (order_number, order_date, order_price, card_number, card_type, card_period, postnumber, basic_address, general_address, sess) => {

    try {
        let addOrder = await db.query(orderQuery.addOrder, [order_number, order_date, order_price, card_number, card_type, card_period, postnumber, basic_address, general_address, sess])
        return addOrder[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.addOrderList = async (order_uid, books_book_uid, book_count) => {

    try {
        let addOrderList = await db.query(orderQuery.addOrderList, [order_uid, books_book_uid, book_count])
        return addOrderList[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.minusBookCount = async (book_count, books_book_uid) => {

    try {
        let minusBookCount = await db.query(orderQuery.minusBookCount, [book_count, books_book_uid])
        return minusBookCount[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.selectOrder = async (sess) => {

    try {
        let selectOrder = await db.query(orderQuery.selectOrder, [sess])
        return selectOrder[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.orderDetail = async (order_uid) => {

    try {
        let orderDetail = await db.query(orderQuery.orderDetail, [order_uid])
        return orderDetail[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.orderBookList = async (order_uid) => {

    try {
        let orderBookList = await db.query(orderQuery.orderBookList, [order_uid])
        return orderBookList[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.selectOrderList = async (order_uid) => {

    try {
        let selectOrderList = await db.query(orderQuery.selectOrderList, [order_uid])
        return selectOrderList[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.plusOrder = async (book_count, books_book_uid) => {

    try {
        let plusOrder = await db.query(orderQuery.plusOrder, [book_count, books_book_uid])
        return plusOrder[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.deleteOrderList = async (order_uid, books_book_uid) => {

    try {
        let deleteOrderList = await db.query(orderQuery.deleteOrderList, [order_uid, books_book_uid])
        return deleteOrderList[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.deleteOrder = async (order_uid) => {

    try {
        let deleteOrder = await db.query(orderQuery.deleteOrder, [order_uid])
        return deleteOrder[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}