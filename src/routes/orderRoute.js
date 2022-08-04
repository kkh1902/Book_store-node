var express = require('express');
var router = express.Router();

const orderController = require('../controllers/orderController')

/* 주문 */
router.post('/', orderController.order);

/* 주문 페이지 */
router.post('/orderPage/:book_uid', orderController.orderPage);

// /* 주문목록 페이지 */
// router.get('/orderListPage', orderController.orderListPage);

// /* 주문상세 페이지 */
// router.get('/orderDetailPage/:order_uid', orderController.orderDetailPage);

// /* 주문목록 삭제 */
// router.get('/deleteOrder/:order_uid', orderController.deleteOrder);

module.exports = router;