const db = require("../../middleware/db");
const myPageQuery = require("../queries/myPageQuery");

exports.cardList = async (sess) => {
    try {
        let list = await db.query(myPageQuery.cardList, [sess]);
        return list[0];
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
};

exports.destList = async (sess) => {
    try {
        let list = await db.query(myPageQuery.destList, [sess]);
        return list[0];
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
};

exports.addCard = async (card_type, card_period, card_id, users_user_id) => {
    try {
        let add = await db.query(myPageQuery.addCard, [
            card_type,
            card_period,
            card_id,
            users_user_id,
        ]);
        return add[0];
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
};

exports.updateCard = async (after_card_number, card_type, card_period, card_number) => {
    try {
        let update = await db.query(myPageQuery.updateCard, [
            after_card_number, card_type, card_period, card_number, card_number
        ]);
        return update[0];
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
};

exports.cardDetail = async (card_number) => {
    try {
        let detail = await db.query(myPageQuery.cardDetail, [card_number]);
        return detail[0];
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
};

exports.deleteCard = async (card_number) => {
    try {
        let del = await db.query(myPageQuery.deleteCard, [card_number]);
        return del[0];
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
};

exports.addDest = async (
    delivery_id,
    postnumber,
    basic_address,
    detail_address,
    users_user_id
) => {
    try {
        let add = await db.query(myPageQuery.addDest, [
            postnumber,
            basic_address,
            detail_address,
            users_user_id,
            delivery_id
        ]);
        return add[0];
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
};

exports.updateDest = async (
    after_postnumber,
    basic_address,
    detail_address,
    postnumber
) => {
    try {
        let update = await db.query(myPageQuery.updateDest, [
            after_postnumber,
            basic_address,
            detail_address,
            postnumber
        ]);
        return update[0];
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
};

// exports.destDetail = async (postnumber) => {
//     try {
//         let detail = await db.query(myPageQuery.destDetail, [postnumber]);
//         return detail[0];
//     } catch (error) {
//         console.log(error);
//         throw Error(error);
//     }
// };

exports.deleteDest = async (postnumber) => {
    try {
        let del = await db.query(myPageQuery.deleteDest, [postnumber]);
        return del[0];
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
};
