const express = require("express");

const router = express.Router();

//HTML
router.use("/login", express.static("../PAGES/login.html"));

//CSS
router.use("/CSS", express.static("../CSS"));

//JS
router.use("/JS", express.static("../JS"));

//Assets
router.use("/assets", express.static("../assets"));


module.exports = router;