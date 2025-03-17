const express = require("express");
const router = express.Router();
const paymentControllers = require("../controllers/payment.controllers");
const { protect } = require("../middleware/authmiddleware");

router.post("/order", protect, paymentControllers.createOrder);

module.exports = router;
