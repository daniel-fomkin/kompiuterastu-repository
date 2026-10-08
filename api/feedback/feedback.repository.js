const db = require("../db");

async function sendFeedbackRepository({ name, email, company, title, message }) {
    return (await db.query("INSERT INTO feedbacks (name, email, company, title, message) VALUES ($1, $2, $3, $4, $5) RETURNING *", [name, email, company, title, message])).rows[0];
}

async function getFeedbackRepository() {
    return (await db.query("SELECT * FROM feedbacks")).rows
}

module.exports = {
    sendFeedbackRepository,
    getFeedbackRepository
}