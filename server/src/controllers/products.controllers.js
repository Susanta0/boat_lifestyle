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

const getModelByCategory = (category) => {
  const categoryToModel = {
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
  return categoryToModel[category];
};

// User Controllers (Public Access)
const productsControllers = {
  // Get all product categories
  getAllCategories: async (req, res) => {
    try {
      const categories = [
        "True Wireless Earbuds",
        "Neckbands",
        "Smart Watches",
        "Nirvana",
        "Wireless Headphones",
        "Wireless Speakers",
        "Wired Headphones",
        "Wired Earphones",
        "Soundbars",
        "Gaming Headphones",
      ];

      return res.json(categories);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  },

  // Get all products across all categories
  getAllCategoriesProducts: async (req, res) => {
    try {
      const { sortBy, order } = req.query;
      const sortOrder = order === "desc" ? -1 : 1;
      const productModels = [
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
      ];

      // Fetch all products from all categories
      const allProducts = await Promise.all(
        productModels.map((model) =>
          model
            .find()
            .sort({ [sortBy]: sortOrder })
            .select("-createdBy")
        )
      );

      // Flatten results from all models
      const flattenedResults = allProducts.flat();

      return res.json(flattenedResults);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  },

  // Get all products of a specific category
  getProductsByCategory: async (req, res) => {
    try {
      const { category } = req.params;
      const { sortBy, order } = req.query;
      const sortOrder = order === "desc" ? -1 : 1;
      const productModel = getModelByCategory(category);

      if (!productModel) {
        return res.status(400).json({ message: "Category not found" });
      }
      const products = await productModel
        .find()
        .sort({ [sortBy]: sortOrder })
        .select("-createdBy");
      return res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  // get single product by id
  getProductById: async (req, res) => {
    try {
      const { category, id } = req.params;
      const productModel = getModelByCategory(category);
      if (!productModel) {
        return res.status(400).json({ message: "Invalid Category" });
      }
      const product = await productModel.findById(id).select("-createdBy");
      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }
      return res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  // search products across all categories
  searchProducts: async (req, res) => {
    try {
      const { query } = req.query;
      const productModels = [
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
      ];

      const searchResult = await Promise.all(
        productModels.map((model) =>
          model
            .find({
              $or: [
                { name: { $regex: query, $options: "i" } },
                { description: { $regex: query, $options: "i" } },
              ],
            })
            .select("-createdBy")
        )
      );
      const flattenedResults = searchResult.flat();
      res.json(flattenedResults);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  },

  // Sort products across all categories
  sortProducts: async (req, res) => {
    try {
      const { sortBy, order } = req.query;
      const sortOrder = order === "desc" ? -1 : 1;
      const productModels = [
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
      ];

      // Fetch all products from all categories and sort them
      const sortedProducts = await Promise.all(
        productModels.map((model) =>
          model
            .find()
            .sort({ [sortBy]: sortOrder })
            .select("-createdBy")
        )
      );

      // Flatten results from all models
      const flattenedResults = sortedProducts.flat();

      return res.json(flattenedResults);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  },
};

// Admin Controllers (Protected Routes)
const adminProductsControllers = {
  // Add new products
  addProduct: async (req, res) => {
    try {
      const { category } = req.params;

      const productModel = getModelByCategory(category);

      if (!productModel) {
        return res.status(400).json({ message: "Invalid category" });
      }

      const productData = {
        ...req.body,
        createdBy: req.user._id,
        category,
      };

      if (!productData.images || productData.images.length !== 5) {
        return res
          .status(400)
          .json({ message: "Must provide exactly 5 images" });
      }

      const product = await productModel.create(productData);
      return res.status(201).json(product);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  },

  // Update product
  updateProduct: async (req, res) => {
    try {
      const { category, id } = req.params;
      const productModel = getModelByCategory(category);

      if (!productModel) {
        return res.status(400).json({ message: "Invalid category" });
      }

      const productData = await productModel.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true, runValidators: true }
      );

      if (!productData) {
        return res.status(404).json({ message: "Product not found" });
      }

      if (req.body.images && req.body.images.length !== 5) {
        return res
          .status(400)
          .json({ message: "Must provide exactly 5 images" });
      }

      res.json(productData);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  // Delete product
  deleteProduct: async (req, res) => {
    try {
      const { category, id } = req.params;

      const productModel = getModelByCategory(category);

      if (!productModel) {
        return res.status(400).json({ message: "Invalid category" });
      }

      const productData = await productModel.findByIdAndDelete(id);

      if (!productData) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = { productsControllers, adminProductsControllers };
