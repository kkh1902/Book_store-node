var express = require("express");
var router = express.Router();

const myPageController = require("../controllers/myPageController");

// localhost:3000/mypage/~~

/* 마이페이지 */
router.get("/main/:users_user_id", myPageController.myPage);

// 카드

// /* 카드 페이지 */
// router.get("/cardPage", myPageController.cardPage);

// /* 카드 추가페이지 */
// router.get("/addCard", myPageController.addCardPage);

/* 카드 추가 */
router.post("/addCard", myPageController.addCard);

// /* 카드 수정페이지 */
// router.get("/updateCard/:card_number", myPageController.updateCardPage);

/* 카드 수정 */
router.patch("/updateCard/:card_number", myPageController.updateCard);

/* 카드 삭제 */
router.delete("/Card/:card_number", myPageController.deleteCard);

// // 배송지

// /* 배송지 페이지 */
// router.get("/deliveryPage", myPageController.desPage);

/* 배송지 추가 */
router.post("/addDest", myPageController.addDest);

// /* 배송지 추가페이지 */
// router.get("/addDest", myPageController.addDestPage);

/* 배송지 수정 */
router.patch("/updateDest/:postnumber", myPageController.updateDest);

// /* 배송지 수정페이지 */
// router.get("/updateDest/:postnumber", myPageController.updateDestPage);

/* 배송지 삭제 */
router.delete("/deleteDest/:postnumber", myPageController.deleteDest);

module.exports = router;
