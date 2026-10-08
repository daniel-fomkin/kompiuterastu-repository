const express = require("express");
const { sendFeedbackController } = require("./feedback.controller");
const asyncHandler = require("../utils/async-handler");

const router = express.Router();

router.post("/feedback", asyncHandler(sendFeedbackController));

module.exports = router;