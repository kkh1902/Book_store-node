const db = require('../../middleware/db')
const basketQuery = require('../queries/basketQuery')

exports.itemDetail = async (book_uid) => {

    try {
        let itemDetail = await db.query(basketQuery.itemDetail, [book_uid])
        return itemDetail[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.basketDetail = async (sess) => {

    try {
        let basketDetail = await db.query(basketQuery.basketDetail, [sess])
        return basketDetail[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.addBasket = async (basket_uid, basket_date, sess) => {

    try {
        let addBasket = await db.query(basketQuery.addBasket, [basket_uid, basket_date, sess])
        return addBasket[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.addItem = async (basket_uid, book_uid) => {

    try {
        let addItem = await db.query(basketQuery.addItem, [basket_uid, book_uid])
        return addItem[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.deleteItem = async (basket_uid, book_uid) => {

    try {
        let deleteItem = await db.query(basketQuery.deleteItem, [basket_uid, book_uid])
        return deleteItem[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.deleteItem2 = async (basket_uid) => {

    try {
        let deleteItem2 = await db.query(basketQuery.deleteItem2, [basket_uid])
        return deleteItem2[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.deleteBasket = async (basket_uid) => {

    try {
        let deleteBasket = await db.query(basketQuery.deleteBasket, [basket_uid])
        return deleteBasket[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}