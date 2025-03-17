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

// Removed routes
// router.put("/:id", protect, cartControllers.updateCart);
// router.delete("/:id", protect, cartControllers.deleteCart);

module.exports = router;
