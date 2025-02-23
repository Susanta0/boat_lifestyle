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
  // Get all products of a specific category
  getAllProducts: async (req, res) => {
    try {
      const { category } = req.params;
      const productModel = getModelByCategory(category);

      if (!ProductModel) {
        return res.status(400).json({ message: "Category not found" });
      }
      const products = await productModel.find().select("-createdBy");
      return res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  // get single product by id
  getProductById: async (req, res) => {
    try {
      const { category, id } = req.params();
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
      const productModel = Object.values(getModelByCategory);
      const searchResult = await Promise.all(
        productModel.map((model) =>
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
};

// Admin Controllers (Protected Routes)
const adminProductsControllers = {
  // Add new products
  addProduct: async (req, res) => {
    try {
      const { category } = req.params;
      console.log(category);
      
      const productModel = getModelByCategory(category);
      if (!productModel) {
        return res.status(400).json({ message: "Invalid category" });
      }

      const productData = {
        ...req.body,
        createdBy: req.user.id,
        category,
      };
      const product = await productModel.create(productData);
      return res.status(201).json(product);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = {productsControllers, adminProductsControllers};
