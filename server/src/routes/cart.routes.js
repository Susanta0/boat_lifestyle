const express = require("express");
const { protect, isAdmin } = require("../middleware/authmiddleware");
const cartControllers = require("../controllers/cart.controllers");
const router = express.Router();

// Removed routes
// router.get("/", protect, isAdmin, cartControllers.getAllCarts);
// router.get("/:id", protect, cartControllers.getCartById);
// router.get("/user/:userId", protect, cartControllers.getCartsByUser);

// Get all products in the authenticated user's cart
router.get("/products", protect, cartControllers.getAllProductsInCart);

// Add a new cart
router.post("/", protect, cartControllers.addCart);

// Removed routes
// router.put("/:id", protect, cartControllers.updateCart);
// router.delete("/:id", protect, cartControllers.deleteCart);

module.exports = router;
