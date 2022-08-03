exports.cardList = "select * from card where users_user_id=?";
exports.destList = "select * from delivery where users_user_id=?";
exports.addCard =
    "insert into card(card_type, card_period, card_number, users_user_id) values(?, ?, ?, ?)";
exports.updateCard = "update card set card_number=?, card_type=?, card_period=? where card_number=?";
exports.cardDetail = "select * from card where card_number=?";
exports.deleteCard = "delete from card where card_number=?";
exports.addDest =
    "insert into delivery(postnumber, basic_address, detail_address, users_user_id, delivery_id) values(?, ?, ?, ?, ?)";
exports.updateDest =
    "update delivery set postnumber=?, basic_address=?, detail_address=? where postnumber=?";
exports.destDetail = "select * from delivery where postnumber=?";
exports.deleteDest = "delete from delivery where postnumber=?";