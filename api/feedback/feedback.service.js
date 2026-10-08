const { isNotEmpty, isEmail } = require("../utils/validators");
const { sendFeedbackRepository } = require("./feedback.repository");

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

module.exports = {
    sendFeedbackService
}