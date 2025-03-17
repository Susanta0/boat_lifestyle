const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const paymentControllers = {
  createOrder: async (req, res) => {
    try {
      const { amount, currency, receipt } = req.body;
      const options = {
        amount: amount * 100, // amount in the smallest currency unit
        currency: currency || "INR",
        receipt,
      };
      const order = await razorpayInstance.orders.create(options);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = paymentControllers;
