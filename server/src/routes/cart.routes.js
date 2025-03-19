const express = require("express");
const { protect, isAdmin } = require("../middleware/authmiddleware");
const cartControllers = require("../controllers/cart.controllers");
const router = express.Router();

// Get all products in the authenticated user's cart
router.get("/products", protect, cartControllers.getAllProductsInCart);

// Add a new cart
router.post("/", protect, cartControllers.addCart);

// Remove a product from the cart
router.delete(
  "/products/:productId",
  protect,
  cartControllers.removeProductFromCart
);

// Update the quantity of a product in the cart
router.put(
  "/products/:productId",
  protect,
  cartControllers.updateProductQuantityInCart
);

// Delete all products from the cart
router.delete("/", protect, cartControllers.clearCart);

module.exports = router;
