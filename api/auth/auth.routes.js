const express = require("express");
const { loginController } = require("./auth.controller");

const router = express.Router();

router.post("/auth/login", loginController);

module.exports = router