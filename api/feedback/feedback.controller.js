const { sendFeedbackService, getFeedbackService, sendEmailService} = require("./feedback.service");

async function sendFeedbackController(req, res) {
    const dbResponse = await sendFeedbackService(req.body);

    res.status(201).send(dbResponse);
}

async function getFeedbackController(req, res) {
    const dbResponse = await getFeedbackService()
    res.send(dbResponse)
}

async function sendEmailController(req, res) {
    const id = req.params.id;

    const emailJsResponse = await sendEmailService(id);
    res.send(emailJsResponse);
}

module.exports = {
    sendFeedbackController,
    getFeedbackController,
    sendEmailController
}