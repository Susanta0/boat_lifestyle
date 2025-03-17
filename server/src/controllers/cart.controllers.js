const Cart = require("../models/cart.model");
// Import all possible models
const {
  TrueWireless,
  Neckband,
  SmartWatch,
  Nirvana,
  WirelessHeadphones,
  WirelessSpeakers,
  WiredHeadphones,
  WiredEarphones,
  Soundbar,
  GamingHeadphones,
} = require("../models/products.model");

// Create a mapping of categories to models
const categoryModelMap = {
  "True Wireless Earbuds": TrueWireless,
  Neckbands: Neckband,
  "Smart Watches": SmartWatch,
  Nirvana: Nirvana,
  "Wireless Headphones": WirelessHeadphones,
  "Wireless Speakers": WirelessSpeakers,
  "Wired Headphones": WiredHeadphones,
  "Wired Earphones": WiredEarphones,
  Soundbars: Soundbar,
  "Gaming Headphones": GamingHeadphones,
};

const categoryToModelMap = {
  "True Wireless Earbuds": "TrueWireless",
  Neckbands: "Neckband",
  "Smart Watches": "SmartWatch",
  Nirvana: "Nirvana",
  "Wireless Headphones": "WirelessHeadphones",
  "Wireless Speakers": "WirelessSpeakers",
  "Wired Headphones": "WiredHeadphones",
  "Wired Earphones": "WiredEarphones",
  Soundbars: "Soundbar",
  "Gaming Headphones": "GamingHeadphones",
};

const cartControllers = {
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
          const Model = categoryModelMap[item.category];
          if (!Model) {
            throw new Error(`Unknown category: ${item.category}`);
          }
          const product = await Model.findById(item.productId);
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
          !product.name ||
          !product.category ||
          !product.beforeOfferPrice ||
          !product.price ||
          !product.image ||
          !product.quantity ||
          !product.onModel // Ensure onModel is included
        ) {
          return res.status(400).json({
            message: "Each product must have all details, including onModel",
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
            existingProduct.price += newProduct.price;
          } else {
            newProduct.onModel = categoryToModelMap[newProduct.category]; // Map category to model
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

  removeProductFromCart: async (req, res) => {
    try {
      const user = req.user._id;
      const { productId } = req.params;

      let cart = await Cart.findOne({ user });

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      cart.products = cart.products.filter(
        (product) => product.productId.toString() !== productId
      );

      await cart.save();
      res.status(200).json({ message: "Product removed from cart" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = cartControllers;
