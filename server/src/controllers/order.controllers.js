const Order = require("../models/order.model");

const orderControllers = {
  createOrder: async (req, res) => {
    try {
      const user = req.user._id;
      const { products, totalAmount } = req.body;

      const newOrder = new Order({
        user,
        products,
        totalAmount,
      });

      await newOrder.save();
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  getOrderDetails: async (req, res) => {
    try {
      const { orderId } = req.params;
      const order = await Order.findById(orderId).populate("products.product");

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.json(order);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = orderControllers;
