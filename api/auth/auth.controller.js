const { loginService } = require("./auth.service");

async function loginController(req, res) {
    const { username, password } = req.body;

    const sessionToken = await loginService(username, password);

    res.cookie("session_token", sessionToken, {
        httpOnly: true,
        secure: true,
        expires_at: 24 * 60 * 60 * 1000
    })

    res.send({
        sessionToken: sessionToken
    });
}

module.exports = {
    loginController
}