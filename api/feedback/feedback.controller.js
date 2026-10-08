const { sendFeedbackService, getFeedbackService } = require("./feedback.service");

async function sendFeedbackController(req, res) {
    const dbResponse = await sendFeedbackService(req.body);

    res.status(201).send(dbResponse);
}

async function getFeedbackController(req, res) {
    const dbResponse = await getFeedbackService()
    res.send(dbResponse)
}

module.exports = {
    sendFeedbackController,
    getFeedbackController
}