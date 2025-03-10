const express = require("express");
const { protect, isAdmin } = require("../middleware/authmiddleware");
const cartControllers = require("../controllers/cart.controllers");
const router = express.Router();

// Get all carts
router.get("/", protect, isAdmin, cartControllers.getAllCarts);

// Get a single cart by ID
router.get("/:id", protect, cartControllers.getCartById);

// Get carts by user
router.get("/user/:userId", protect, cartControllers.getCartsByUser);

// Add a new cart
router.post("/", protect, cartControllers.addCart);

// Update a cart
router.put("/:id", protect, cartControllers.updateCart);

// Delete a cart
router.delete("/:id", protect, cartControllers.deleteCart);

module.exports = router;
