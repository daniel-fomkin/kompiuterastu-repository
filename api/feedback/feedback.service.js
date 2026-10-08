const { isNotEmpty, isEmail } = require("../utils/validators");
const { sendFeedbackRepository, getFeedbackRepository } = require("./feedback.repository");

async function sendFeedbackService(dataBody) {
    isNotEmpty(dataBody.name, "Username");
    isNotEmpty(dataBody.email, "Email");
    isNotEmpty(dataBody.company, "Company Name");
    isNotEmpty(dataBody.title, "Title");
    isNotEmpty(dataBody.message, "Message");

    const { email } = dataBody;

    isEmail(email);

    return await sendFeedbackRepository(dataBody);
}

async function getFeedbackService() {
    return await getFeedbackRepository();
}

module.exports = {
    sendFeedbackService,
    getFeedbackService
}