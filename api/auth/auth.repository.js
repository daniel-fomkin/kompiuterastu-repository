const db = require("../db");

// get session
async function getSession(sessionToken) {
    const session = (await db.query("SELECT FROM sessions WHERE id=$1", sessionToken)).rows[0];

    return session;
}

// delete session
async function deleteSession(sessionToken) {
    await db.query("DELETE FROM sessions WHERE id=$1", sessionToken);
}

module.exports = {
    getSession,
    deleteSession

}