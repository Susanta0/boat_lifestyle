const express = require('express');
const { protect, isAdmin } = require('../middleware/authmiddleware');
const { productsControllers, adminProductsControllers } = require('../controllers/products.controllers');
const router = express.Router();

router.get("/all_products", productsControllers.getAllCategoriesProducts)
router.get("/:category", productsControllers.getAllProducts)
router.get("/:category/:id", productsControllers.getProductById)
router.get("/search", productsControllers.searchProducts)

router.post("/:category", protect, isAdmin, adminProductsControllers.addProduct )
router.put("/:category/:id", protect, isAdmin, adminProductsControllers.updateProduct)
router.delete("/:category/:id", protect, isAdmin, adminProductsControllers.deleteProduct)

module.exports = router;