const crypto = require("crypto");
const { loginReposirory, getSession, deleteSession } = require("./auth.repository");

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

async function logoutService(sessionToken) {
    const session = await getSession(sessionToken);

    if(!session){
        const err = new Error("Session does not exist");
        err.status = 401;

        throw err;
    }

    await deleteSession(sessionToken);
}

module.exports = {
    loginService,
    logoutService
}