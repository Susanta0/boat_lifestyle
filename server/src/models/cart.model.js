const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false, // Change required to false
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          required: true,
          refPath: "products.onModel", // Ensure refPath is correctly set
        },
        onModel: {
          type: String,
          required: true,
          enum: [
            "TrueWireless",
            "Neckband",
            "SmartWatch",
            "Nirvana",
            "WirelessHeadphones",
            "WirelessSpeakers",
            "WiredHeadphones",
            "WiredEarphones",
            "Soundbar",
            "GamingHeadphones",
          ], // List all possible models here
        },
        name: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        beforeOfferPrice: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Cart = model("Cart", cartSchema);

module.exports = Cart;
