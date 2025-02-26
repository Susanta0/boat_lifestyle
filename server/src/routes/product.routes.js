const express = require('express');
const { protect, isAdmin } = require('../middleware/authmiddleware');
const { productsControllers, adminProductsControllers } = require('../controllers/products.controllers');
const router = express.Router();


// ====== PUBLIC ROUTES ======

// Get all product categories
router.get("/categories", productsControllers.getAllCategories)

// Get all products across all categories
router.get("/all", productsControllers.getAllCategoriesProducts)

// Get products by category
router.get("/category/:category", productsControllers.getProductsByCategory)

// Get a single product by ID
router.get("/category/:category/:id", productsControllers.getProductById)

// Search products across all categories
router.get("/search", productsControllers.searchProducts)


// ====== ADMIN ROUTES ======

// Add a new product
router.post("/admin/:category", protect, isAdmin, adminProductsControllers.addProduct)

// Update a product
router.put("/admin/:category/:id", protect, isAdmin, adminProductsControllers.updateProduct)

// Delete a product
router.delete("/admin/:category/:id", protect, isAdmin, adminProductsControllers.deleteProduct)

module.exports = router;