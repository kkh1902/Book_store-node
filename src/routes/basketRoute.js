var express = require('express');
var router = express.Router();

const basketController = require('../controllers/basketController')


// /* 항목 담기 */
// router.get('/addItem/:book_uid', basketController.addItem);

// /* 항목 삭제 */
// router.get('/deleteItem/:book_uid', basketController.deleteItem);

/* 장바구니 페이지 */
router.get('/', basketController.basketPage);

// /* 장바구니 주문 */
// router.get('/basketOrder/:basket_uid', basketController.basketOrder);

module.exports = router;