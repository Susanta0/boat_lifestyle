const Cart = require("../models/cart.model");
// Import all possible models
const TrueWireless = require("../models/products.model");
const Neckband = require("../models/products.model");
const SmartWatch = require("../models/products.model");
const Nirvana = require("../models/products.model");
const WirelessHeadphones = require("../models/products.model");
const WirelessSpeakers = require("../models/products.model");
const WiredHeadphones = require("../models/products.model");
const WiredEarphones = require("../models/products.model");
const Soundbar = require("../models/products.model");
const GamingHeadphones = require("../models/products.model");

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

  getAllProductsInCart: async (req, res) => {
    try {
      const user = req.user._id; // Get authenticated user ID from request
      const cart = await Cart.findOne({ user });

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      // Manually fetch product details
      const products = await Promise.all(
        cart.products.map(async (item) => {
          let product;
          switch (item.onModel) {
            case "TrueWireless":
              product = await TrueWireless.findById(item.productId);
              break;
            case "Neckband":
              product = await Neckband.findById(item.productId);
              break;
            case "SmartWatch":
              product = await SmartWatch.findById(item.productId);
              break;
            case "Nirvana":
              product = await Nirvana.findById(item.productId);
              break;
            case "WirelessHeadphones":
              product = await WirelessHeadphones.findById(item.productId);
              break;
            case "WirelessSpeakers":
              product = await WirelessSpeakers.findById(item.productId);
              break;
            case "WiredHeadphones":
              product = await WiredHeadphones.findById(item.productId);
              break;
            case "WiredEarphones":
              product = await WiredEarphones.findById(item.productId);
              break;
            case "Soundbar":
              product = await Soundbar.findById(item.productId);
              break;
            case "GamingHeadphones":
              product = await GamingHeadphones.findById(item.productId);
              break;
            default:
              throw new Error(`Unknown model: ${item.onModel}`);
          }
          return {
            ...item.toObject(),
            product,
          };
        })
      );

      res.json(products);
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
        if (
          !product.productId ||
          !product.category ||
          !product.name ||
          !product.beforeOfferPrice ||
          !product.price ||
          !product.image ||
          !product.quantity
        ) {
          return res.status(400).json({
            message: "Each product must have all details",
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
