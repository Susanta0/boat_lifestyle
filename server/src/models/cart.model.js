const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          required: true,
          refPath: "onModel", // Use refPath to dynamically reference different models
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
        category: {
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
