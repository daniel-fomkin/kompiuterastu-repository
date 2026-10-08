const express = require("express");

const { sendFeedbackController, getFeedbackController } = require("./feedback.controller");

const asyncHandler = require("../utils/async-handler");
const authHandler = require("../middleware/auth-handler");

const router = express.Router();

router.post("/feedback", asyncHandler(sendFeedbackController));

router.use(authHandler)

router.get("/feedback", asyncHandler(getFeedbackController));

module.exports = router;