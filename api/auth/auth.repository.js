const db = require("../db");

//Create Session
async function loginReposirory(sessionToken, expires) {
    await db.query("INSERT INTO sessions VALUES ($1, $2)", [sessionToken, expires]);
}

module.exports = {
    loginReposirory
}