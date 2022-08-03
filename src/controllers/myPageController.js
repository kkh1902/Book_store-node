const myPageService = require("../services/myPageService");
const userService = require("../services/userService");

exports.myPage = async (req, res) => {
    const { users_user_id } = req.params;

    try {
        let card_info = await myPageService.cardList(users_user_id);
        let dest_info = await myPageService.destList(users_user_id)
        let sess = req.session.user_id;
        // let point = await userService.point(sess)
        return res.render("myPage/myPage", {
            sess: sess,
            card_info: card_info,
            dest_info: dest_info
            // point: point
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

// exports.cardPage = async (req, res) => {


//     try {
//         let sess = req.session.user_id;
//         let card_info = await myPageService.cardList(sess);

//         return res.render("card/cardPage", {
//             sess: sess,
//             card_info: card_info,
//         });
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// };

exports.addCard = async (req, res) => {
    const { card_type, card_period, card_number } = req.body;
    let sess = req.session.user_id
    users_user_id = sess

    try {
        await myPageService.addCard(
            card_type,
            card_period,
            card_number,
            users_user_id
        );
        return res.redirect("/myPage/main/" + users_user_id);
    } catch (error) {
        return res.status(500).json(error);
    }
};

// exports.addCardPage = async (req, res) => {

//     try {
//         let sess = req.session.user_id;
//         console.log(sess);
//         let card_info = await myPageService.cardList(sess);
//         console.log(card_info);
//         return res.render("card/addCard", { sess: sess, card_info: card_info });
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// };

exports.updateCard = async (req, res) => {
    let sess = req.session.user_id
    const { card_number } = req.params;
    console.log(card_number);
    const { card_type, card_period, after_card_number } = req.body;


    try {
        await myPageService.updateCard(after_card_number, card_type, card_period, card_number);
        return res.redirect("/myPage/main/" + sess);
    } catch (erroe) {
        return res.status(500).json(error);
    }
};

// exports.updateCardPage = async (req, res) => {
//     const { card_number } = req.params;

//     try {
//         let card_info = await myPageService.cardDetail(card_number);
//         let sess = req.session.user_id;
//         return res.render("card/modifyCard", {
//             sess: sess,
//             card_info: card_info
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error);
//     }
// };

exports.deleteCard = async (req, res) => {
    let sess = req.session.user_id
    users_user_id = sess

    const { card_number } = req.params;
    console.log(card_number);

    try {
        await myPageService.deleteCard(card_number);
        return res.redirect("/myPage/main/" + users_user_id);
    } catch (error) {
        return res.status(500).json(error);
    }
};

// exports.desPage = async (req, res) => {

//     let sess = req.session.user_id;
//     let dest_info = await myPageService.destList([sess]);
//     try {
//         return res.render("delivery/deliveryPage", {
//             sess: sess,
//             dest_info: dest_info
//         });
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// };

exports.addDest = async (req, res) => {
    const { postnumber, basic_address, detail_address } = req.body;
    let sess = req.session.user_id
    console.log(sess);
    users_user_id = sess

    try {
        let delivery_id = String(Math.random() * 100000000000000000);

        await myPageService.addDest(
            delivery_id,
            postnumber,
            basic_address,
            detail_address,
            users_user_id
        );
        return res.redirect("/myPage/main/" + sess);
    } catch (error) {
        return res.status(500).json(error);
    }
};

// exports.addDestPage = async (req, res) => {
//     try {
//         let sess = req.session.user_id;

//         return res.render("delivery/addDest", { sess: sess });
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// };

exports.updateDest = async (req, res) => {
    const { basic_address, detail_address, after_postnumber } = req.body;
    const { postnumber } = req.params;
    let sess = req.session.user_id;

    try {
        await myPageService.updateDest(
            after_postnumber, basic_address, detail_address, postnumber
        );
        return res.redirect("/myPage/main/" + sess);
    } catch (erroe) {
        return res.status(500).json(error);
    }
};

// exports.updateDestPage = async (req, res) => {
//     const { postnumber } = req.params;

//     try {
//         let dest_info = await myPageService.destDetail(postnumber);
//         let sess = req.session.user_uid;
//         return res.render("delivery/modifyDest",
//             {
//                 sess: sess,
//                 dest_info: dest_info
//             });
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// };

exports.deleteDest = async (req, res) => {
    const { postnumber } = req.params;
    let sess = req.session.user_id;

    try {
        await myPageService.deleteDest(postnumber);
        return res.redirect("/myPage/main/" + sess);
    } catch (error) {
        return res.status(500).json(error);
    }
};
