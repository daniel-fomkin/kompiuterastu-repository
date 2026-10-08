const { isNotEmpty, isEmail } = require("../utils/validators");
const { sendFeedbackRepository, getFeedbackRepository, getFeedbackById} = require("./feedback.repository");

const emailjs = require("@emailjs/nodejs");

async function sendFeedbackService(dataBody) {
    isNotEmpty(dataBody.name, "Username");
    isNotEmpty(dataBody.email, "Email");
    isNotEmpty(dataBody.company, "Company Name");
    isNotEmpty(dataBody.title, "Title");
    isNotEmpty(dataBody.message, "Message");

    const { userName, userEmail, userCompany, userTitle, userMessage } = dataBody;

    isEmail(userEmail);

    return await sendFeedbackRepository(dataBody);
}

async function getFeedbackService() {
    return await getFeedbackRepository();
}

async function sendEmailService(id) {
    const feedback = await getFeedbackById(id);

    console.log(feedback)
    

    if (!feedback) {
        const err = new Error('No such feedback');
        err.status = 404;

        throw err
    }
    
    else {

        const templateParams = {
        name: feedback.name,
        email: feedback.email,
        title: feedback.title
        }

        try {
        await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            templateParams, 
            {
                publicKey: process.env.EMAILJS_PUBLIC_KEY,
                privateKey: process.env.EMAILJS_PRIVATE_KEY
            }
        );

        return { success: true, message: 'Feedback sent successfully.' };

        } catch (error) {
            const err = new Error('EmailJS Error:', error);
            err.status = 500;

            throw err
        }
    }

    
}

module.exports = {
    sendFeedbackService,
    getFeedbackService,
    sendEmailService
}