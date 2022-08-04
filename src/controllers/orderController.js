const orderService = require('../services/orderService')
const bookService = require('../services/bookService')
const myPageService = require('../services/myPageService')
const userService = require('../services/userService')

exports.order = async (req, res) => {
    let sess = req.session.user_id
    const { card } = req.body
    console.log(card);

    try {
        return res.send(`<script type="text/javascript">
                alert("주문이 완료되었습니다."); 
                location.href='/';
                </script>`);
    }

    catch (error) {
        console.log(error)
    }

}

// exports.order = async (req, res) => {

//     const { book_price, card_uid, destination_uid, point } = req.body
//     let { books_book_uid, book_count } = req.body

//     try {

//         let users_user_uid = req.session.user_uid
//         let order_uid = String(Math.random() * 100000000000000000)
//         let order_date = new Date()
//         let order_amount = 0
//         if (books_book_uid.length > 1) {
//             for (var i = 0; i < books_book_uid.length; i++) {
//                 let price = book_price[i]
//                 let count = book_count[i]
//                 console.log(price)
//                 console.log(count)
//                 order_amount = order_amount + price * count
//             }
//         } else {
//             order_amount = book_price * book_count
//         }

//         let card_info = await myPageService.cardDetail(card_uid)
//         let dest_info = await myPageService.destDetail(destination_uid)

//         let card = card_info[0]
//         let dest = dest_info[0]

//         let card_com = card.card_com
//         let card_exp = card.card_exp
//         let destination_post = dest.destination_post
//         let destination_addr = dest.destination_addr
//         let destination_detail = dest.destination_detail

//         order_amount = order_amount - point

//         await userService.pointDown(point, users_user_uid)

//         await orderService.addOrder(order_uid, order_date, order_amount, card_com, card_uid, card_exp, destination_post, destination_addr, destination_detail, users_user_uid, point)

//         for (var i = 0; i < books_book_uid.length; i++) {

//             let book_uid = books_book_uid[i]
//             let count = book_count[i]
//             await orderService.addOrderList(order_uid, book_uid, count)
//             await orderService.minusBookCount(count, book_uid)
//         }

//         return res.send(`<script type="text/javascript">
//                 alert("주문이 완료되었습니다."); 
//                 location.href='./orderListPage';
//                 </script>`);
//     }

//     catch (error) {
//         console.log(error)
//     }

// }

exports.orderPage = async (req, res) => {

    const { book_uid } = req.params
    const { basket_book_amount } = req.body

    try {
        let sess = req.session.user_id
        let book_info = await bookService.bookDetail(book_uid)
        let card_info = await myPageService.cardList(sess)
        let dest_info = await myPageService.destList(sess)

        return res.render('shopping/order', {
            sess: sess,
            book_info: book_info,
            card_info: card_info,
            dest_info: dest_info
        })
    }

    catch (error) {
        console.log(error)
    }

}

// exports.orderListPage = async (req, res) => {

//     try {
//         let sess = req.session.user_uid
//         let order_info = await orderService.selectOrder(sess)
//         return res.render('index', {
//             page: './order/orderList',
//             sess: sess,
//             order_info: order_info
//         })
//     }

//     catch (error) {
//         return res.status(500).json(error)
//     }

// }

// exports.orderDetailPage = async (req, res) => {

//     const { order_uid } = req.params

//     try {
//         let sess = req.session.user_uid
//         let order_info = await orderService.orderDetail(order_uid)
//         let bookList_info = await orderService.orderBookList(order_uid)


//         return res.render('index', {
//             page: './order/orderList',
//             sess: sess,
//             order_info: order_info,
//             bookList_info: bookList_info
//         })
//     }

//     catch (error) {
//         return res.status(500).json(error)
//     }

// }

// exports.deleteOrder = async (req, res) => {

//     const { order_uid } = req.params

//     try {

//         let orderList_info = await orderService.selectOrderList(order_uid)

//         for (var i = 0; i < orderList_info.length; i++) {

//             let book_count = orderList_info[i].book_count
//             let books_book_uid = orderList_info[i].books_book_uid

//             await orderService.plusOrder(book_count, books_book_uid)
//             await orderService.deleteOrderList(order_uid, books_book_uid)
//         }

//         await orderService.deleteOrder(order_uid)

//         return res.redirect('/order/orderListPage/')
//     }

//     catch (error) {
//         return res.status(500).json(error)
//     }

// }