const Cart = require("../models/cart.model");

const cartControllers = {
  getAllCarts: async (req, res) => {
    try {
      const carts = await Cart.find()
        .populate("user")
        .populate("products.product");
      res.json(carts);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  getCartById: async (req, res) => {
    try {
      const { id } = req.params;
      const cart = await Cart.findById(id)
        .populate("user")
        .populate("products.product");
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }
      res.json(cart);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  getCartsByUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const carts = await Cart.find({ user: userId })
        .populate("user")
        .populate("products.product");
      res.json(carts);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  addCart: async (req, res) => {
    try {
      const { products } = req.body;
      const user = req.user._id; // Get authenticated user ID from request

      if (!products || !Array.isArray(products) || products.length === 0) {
        return res.status(400).json({ message: "Products are required" });
      }

      // Validate each product
      for (const product of products) {
        if (!product.productId || !product.category || !product.quantity) {
          return res.status(400).json({
            message: "Each product must have productId, category, and quantity",
          });
        }
      }

      let cart = await Cart.findOne({ user });

      if (!cart) {
        cart = new Cart({ user, products });
      } else {
        products.forEach((newProduct) => {
          const existingProduct = cart.products.find(
            (product) => product.productId.toString() === newProduct.productId
          );
          if (existingProduct) {
            existingProduct.quantity += newProduct.quantity;
          } else {
            cart.products.push(newProduct);
          }
        });
      }

      await cart.save();
      res.status(201).json(cart);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  updateCart: async (req, res) => {
    try {
      const { id } = req.params;
      const cart = await Cart.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }
      res.json(cart);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  deleteCart: async (req, res) => {
    try {
      const { id } = req.params;
      const cart = await Cart.findByIdAndDelete(id);
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }
      res.json({ message: "Cart deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = cartControllers;
