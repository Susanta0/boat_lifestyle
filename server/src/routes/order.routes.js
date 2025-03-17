const express = require("express");
const { protect } = require("../middleware/authmiddleware");
const orderControllers = require("../controllers/order.controllers");
const router = express.Router();

router.post("/", protect, orderControllers.createOrder);
router.get("/:orderId", protect, orderControllers.getOrderDetails);

module.exports = router;
