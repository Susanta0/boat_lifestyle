const express = require('express');
const { protect, isAdmin } = require('../middleware/authmiddleware');
const { productsControllers, adminProductsControllers } = require('../controllers/products.controllers');
const router = express.Router();


router.get("/:category", productsControllers.getAllProducts)
router.get("/:category/:id", productsControllers.getProductById)
router.get("/search", productsControllers.searchProducts)

router.post("/:category", protect, isAdmin, adminProductsControllers.addProduct )

module.exports = router;