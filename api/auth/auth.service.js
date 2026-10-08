const crypto = require("crypto");
const { loginReposirory } = require("./auth.repository");

async function loginService(username, password) {
    if (!(process.env.ADMIN_USERNAME == username && process.env.ADMIN_PASSWORD == password)) {
        const err = new Error("Invalid credentials");
        err.status = 401;

        throw err;
    }

    const sessionToken = crypto.randomBytes(32).toString("hex");

    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)

    await loginReposirory(sessionToken, expiresAt);

    return sessionToken;
}

module.exports = {
    loginService
}