const express = require("express");
const { loginController, logoutController } = require("./auth.controller");
const asyncHandler = require("../utils/async-handler");

const router = express.Router();

router.post("/auth/login", loginController);
router.delete("/auth/logout", asyncHandler(logoutController));

module.exports = router