const basketService = require('../services/basketService')
const myPageService = require('../services/myPageService')

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

    try {
        let sess = req.session.user_id
        let basket_info = await basketService.basketDetail(sess)
        console.log(basket_info);
        let basket_uid = basket_info[0].basket_uid
        console.log(basket_uid);
        let item_info = await basketService.itemDetail(basket_uid)
        console.log(item_info);
        var hap, sum = 0;
        for (var i = 0; i < item_info.length; i++) {
            hap = item_info[i].basket_book_amount * item_info[i].book_price
            console.log(hap)
            sum = sum + hap;

        }
        console.log("총", sum)




        return res.render('shopping/basket', {
            sess: sess,
            basket_info,
            item_info,
            sum
        })
    }

    catch (error) {
        console.log(error)
    }

}

// exports.basketPage = async (req, res) => {

//     try{
//         let sess = req.session.user_id
//         let basket_info = await basketService.basketDetail(sess)
//         console.log(basket_info);
//         let book_uid = basket_info[0].book_uid
//         let basket = basket_info[0]
//         let basket_uid = basket.basket_uid 

//         let item_info = await basketService.itemDetail(book_uid)


//         return res.render('shopping/basket', {
//             sess:sess,
//             basket_info:basket_info,
//             item_info:item_info
//          })
//     }

//     catch (error) {
//         console.log(error)
//     }

// }

// exports.addItem = async (req, res) => {

//     const { book_uid } = req.params

//     try{
//         let sess = req.session.user_id
//         let basketDetail_info = await basketService.basketDetail(sess)
//         console.log(basketDetail_info);

//         if(basketDetail_info.length == 0){
//             let basket_uid = String(Math.random()*100000)
//             let basket_date = new Date()
//             await basketService.addBasket(basket_number, basket_date, sess)
//             await basketService.addItem(basket_uid, book_uid)
//         } else {
//             let basketDetail = basketDetail_info[0]
//             let basket_uid = basketDetail.basket_uid

//             await basketService.addItem(basket_uid, book_uid)
//         }

//         return res.send(`<script type="text/javascript">
//                 alert("장바구니에 추가되었습니다."); 
//                 location.href='/shopping/basket';
//                 </script>`);
//     }

//     catch (error) {
//         return res.status(500).json(error)
//     }

// }

exports.addItem = async (req, res) => {

    const { book_uid } = req.params
    console.log(book_uid);
    const { basket_book_amount } = req.body
    console.log(basket_book_amount);

    try {
        let sess = req.session.user_id
        console.log(sess);
        let basketDetail_info = await basketService.basketDetail(sess)
        console.log(basketDetail_info);

        if (basketDetail_info.length == 0) {
            let basket_uid = Math.floor(Math.random() * 1000)
            console.log(basket_uid);
            let basket_date = new Date()
            console.log(basket_date);
            await basketService.addBasket(basket_uid, basket_date, sess)
            await basketService.addItem(basket_uid, book_uid, basket_book_amount)

        } else {
            let basketDetail = basketDetail_info[0]
            let basket_uid = basketDetail.basket_uid
            await basketService.addItem(basket_uid, book_uid, basket_book_amount)

        }

        return res.send(`<script type="text/javascript">
                alert("장바구니에 추가되었습니다."); 
                location.href='/';
                </script>`);
    }

    catch (error) {
        res.send(`<script type="text/javascript">
        alert("이미 장바구니에 추가되었습니다."); 
        location.href='/';
        </script>`);
    }

}

exports.deleteItem = async (req, res) => {

    const { book_uid } = req.params

    try {
        let sess = req.session.user_id
        console.log(sess);
        let basketDetail_info = await basketService.basketDetail(sess)
        console.log(basketDetail_info);
        let basketDetail = basketDetail_info[0]
        console.log(basketDetail);
        let basket_uid = basketDetail.basket_uid
        console.log(basket_uid);

        await basketService.deleteItem(basket_uid, book_uid)

        return res.redirect('/basket')
    }

    catch (error) {
        return res.status(500).json(error)
    }

}