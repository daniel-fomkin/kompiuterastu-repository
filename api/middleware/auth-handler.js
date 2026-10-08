const { getSession, deleteSession } = require("../auth/auth.repository");

async function authHandler(req, res, next) {
    const sessionToken = req.cookies.session_token;

    const session = await getSession(sessionToken);

    if (!session) {
        const err = new Error("Session does not exist");
        err.status = 401;

        throw err;
    }

    const now = Date.now();
    const expires = new Date(session.expires_at).getTime();

    if (now > expires) {
        await deleteSession(sessionToken)

        const err = new Error("Session expired");
        err.status = 401;

        throw err;
    }

    next();
}

module.exports = authHandler;