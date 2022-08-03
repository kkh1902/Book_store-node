var express = require('express');
var router = express.Router();

const bookController = require('../controllers/bookController')

/* 도서 추가 */
router.post('/addBook', bookController.addBook);

// /* 도서 수정 */
// router.patch('/updateBook/:book_uid', bookController.updateBook);

/* 도서 삭제 */
router.delete('/bookdelete/:book_uid', bookController.bookdelete);

/* 도서 목록 */
router.get('/', bookController.bookList);

/* 도서 상세보기 */
router.get('/bookDetail/:book_uid', bookController.bookDetail);

module.exports = router;