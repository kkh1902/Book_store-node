// 회원가입 쿼리문
exports.signup = 'insert into users(user_id, user_password, user_name) values(?, ?, ?)'
// 로그인 쿼리문
exports.signin = 'select * from users where user_id=? and user_password=?'