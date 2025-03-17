const express = require("express");
const { protect } = require("../middleware/authmiddleware");
const addressControllers = require("../controllers/address.controllers");
const router = express.Router();

router.post("/", protect, addressControllers.addAddress);

module.exports = router;
