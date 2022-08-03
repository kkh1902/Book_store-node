const basketService = require('../services/basketService')
const myPageService= require('../services/myPageService')

// exports.basketOrder = async (req, res) => {

//     const { basket_uid } = req.params

//     try {
//         let sess = req.session.user_uid
//         let book_info = await basketService.itemDetail(basket_uid)
//         let card_info = await myPageService.cardList(sess)
//         let dest_info = await myPageService.destList(sess)
//         await basketService.deleteItem2(basket_uid)
//         await basketService.deleteBasket(basket_uid)
        
//         return res.render('index', {
//             page:'./order/order',
//             sess:sess,
//             book_info:book_info,
//             card_info:card_info,
//             dest_info:dest_info
//         })
//     }

//     catch(error) {
//         console.log(error)
//     }

// }

exports.basketPage = async (req, res) => {
    
    try{
        let sess = req.session.user_id
        let basket_info = await basketService.basketDetail(sess)
        console.log(basket_info);
        // let book_uid = basket_info[0].book_uid
        // let basket = basket_info[0]
        // let basket_uid = basket.basket_uid 

        // let item_info = await basketService.itemDetail(book_uid)
        // console.log(item_info);

        return res.render('shopping/basket', {
            sess:sess,
            basket_info:basket_info,
            // item_info:item_info
         })
    }

    catch (error) {
        console.log(error)
    }

}

// exports.addItem = async (req, res) => {
    
//     const { book_uid } = req.params

//     try{
//         let sess = req.session.user_uid

//         let basketDetail_info = await basketService.basketDetail(sess)

//         if(basketDetail_info.length == 0){
//             let basket_uid = String(Math.random()*100000000000000000)
//             let basket_date = new Date()
//             await basketService.addBasket(basket_uid, basket_date, sess)
//             await basketService.addItem(basket_uid, book_uid)
//         } else {
//             let basketDetail = basketDetail_info[0]
//             let basket_uid = basketDetail.basket_uid

//             await basketService.addItem(basket_uid, book_uid)
//         }

//         return res.send(`<script type="text/javascript">
//                 alert("장바구니에 추가되었습니다."); 
//                 location.href='/basket/basketPage';
//                 </script>`);
//     }

//     catch (error) {
//         return res.status(500).json(error)
//     }

// }

// exports.deleteItem = async (req, res) => {
    
//     const { book_uid } = req.params

//     try{
//         let sess = req.session.user_uid

//         let basketDetail_info = await basketService.basketDetail(sess)
//         let basketDetail = basketDetail_info[0]
//         let basket_uid = basketDetail.basket_uid

//         await basketService.deleteItem(basket_uid, book_uid)

//         return res.redirect('/basket/basketPage/')
//     }

//     catch (error) {
//         return res.status(500).json(error)
//     }

// }