const Address = require("../models/address.model");

const addressControllers = {
  addAddress: async (req, res) => {
    try {
      const user = req.user._id;
      const {
        fullName,
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode,
        country,
        phoneNumber,
      } = req.body;

      const newAddress = new Address({
        user,
        fullName,
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode,
        country,
        phoneNumber,
      });

      await newAddress.save();
      res.status(201).json(newAddress);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  getAllAddresses: async (req, res) => {
    try {
      const user = req.user._id;
      const addresses = await Address.find({ user });
      res.status(200).json(addresses);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = addressControllers;
