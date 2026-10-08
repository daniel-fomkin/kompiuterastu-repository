const { sendFeedbackService } = require("./feedback.service");

async function sendFeedbackController(req, res) {
    const dbResponse = await sendFeedbackService(req.body);

    res.status(201).send(dbResponse);
}

module.exports = {
    sendFeedbackController
}