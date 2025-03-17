const Order = require("../models/order.model");

const orderControllers = {
  createOrder: async (req, res) => {
    try {
      const user = req.user._id;
      const { products, totalAmount, order_id } = req.body;

      const newOrder = new Order({
        user,
        products,
        totalAmount,
        order_id, // Save order_id
      });

      await newOrder.save();
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  getOrderDetails: async (req, res) => {
    try {
      const { order_id } = req.params;
      const order = await Order.findOne({ order_id }).populate(
        "products.product"
      );
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = orderControllers;
