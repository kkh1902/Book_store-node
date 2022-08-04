const userService = require('../services/userService.js')

exports.signup = async (req, res) => {

    const { user_id, user_password, user_name } = req.body

    try {

        await userService.signup(user_id, user_password, user_name)
        return res.redirect('/user/signin');

    }

    catch (error) {
        res.send('<script type="text/javascript">alert("이미 사용중인 아이디 입니다."); document.location.href="/user/signup";</script>')
        //위에 줄 설명 가능하게 
        return res.status(500).json(error)
    }
}

exports.signupPage = async (req, res) => {
    try {

        // let sess = req.session.user_id
        // console.log(sess)
        return res.render("user/signup")

    }
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.signin = async (req, res) => {

    const { user_id, user_password } = req.body;
    console.log(req.body);
    try {
        let signin = await userService.signin(user_id, user_password)
        req.session.user_id = signin[0].user_id
        let sess = req.session.user_id;
        console.log(sess)
        if (signin[0].user_id == user_id && signin[0].user_password == user_password) {
            console.log(req.session)
            

            // 로그인 성공
            req.session.isLogined = true;
            req.session.save(function () {
                return res.redirect('/');
            });

        } else {
            req.session.save(function () {
                return res.redirect('/')
            })

        }



    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
    }
}

exports.signinPage = async (req, res) => {
    try {
        let user = req.session
        console.log(user)
        return res.render("user/signin")

    } catch (error) {
        return res.status(500).json(error)
    }

}

exports.logout = async (req, res) => {

    try {
        delete req.session.user_id;
        delete req.session.isLogined;
        return res.send(`<script type="text/javascript">
            alert("로그아웃 되었습니다."); 
            location.href='/';
            </script>`);
    }

    catch (error) {
        return res.status(500).json(error)
    }

}