const express = require("express");

const { sendFeedbackController, getFeedbackController, sendEmailController } = require("./feedback.controller");

const asyncHandler = require("../utils/async-handler");
const authHandler = require("../middleware/auth-handler");

const router = express.Router();

router.post("/feedback", asyncHandler(sendFeedbackController));

router.use("/feedback", authHandler);

router.get("/feedback", asyncHandler(getFeedbackController));
router.post("/feedback/:id", asyncHandler(sendEmailController));


module.exports = router;