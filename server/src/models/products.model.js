const { Schema, model } = require("mongoose");

// Base product schema with common fields
const baseProductSchema = {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    validate: [(array) => array.length === 5, "Must specify exactly 5 images"],
  },
  description: {
    type: String,
    required: true,
  },
  playbackHours: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  colors: {
    type: [
      {
        name: String,
        code: String, // hex code or color name
      },
    ],
    validate: [(array) => array.length === 2, "Must specify exactly 2 colors"],
  },
  beforeOfferPrice: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
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
    ],
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
};

// True Wireless Earbuds Schema
const trueWirelessSchema = new Schema(
  {
    ...baseProductSchema,
    chargingCase: {
      type: new Schema(
        {
          batteryLife: { type: Number, required: true },
          type: { type: String, required: true },
        },
        { _id: false }
      ),
      required: true,
    },
    noiseControl: {
      type: Boolean,
      default: false,
    },
    waterResistance: String,
    connectivity: {
      bluetooth: {
        version: String,
        range: Number, // in meters
      },
    },
  },
  { versionKey: false, timestamps: true }
);

// Neckband Schema
const neckbandSchema = new Schema(
  {
    ...baseProductSchema,
    noiseControl: Boolean,
    waterResistance: String,
    driverSize: Number,
    connectivity: {
      bluetooth: {
        version: String,
        range: Number,
      },
    },
  },
  { versionKey: false, timestamps: true }
);

// Smart Watch Schema
const smartWatchSchema = new Schema(
  {
    ...baseProductSchema,
    displayType: String,
    screenSize: Number,
    resolution: String,
    healthFeatures: [
      {
        type: String,
      },
    ],
    compatibility: {
      android: Boolean,
      ios: Boolean,
    },
    waterResistance: String,
  },
  { versionKey: false, timestamps: true }
);

// Nirvana (Premium Audio) Schema
const nirvanaSchema = new Schema(
  {
    ...baseProductSchema,
    driverType: String,
    frequency: {
      min: Number,
      max: Number,
    },
    impedance: Number,
    premium_features: [
      {
        type: String,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

// Wireless Headphones Schema
const wirelessHeadphonesSchema = new Schema(
  {
    ...baseProductSchema,
    noiseControl: Boolean,
    driverSize: Number,
    foldable: Boolean,
    connectivity: {
      bluetooth: {
        version: String,
        range: Number,
      },
    },
  },
  { versionKey: false, timestamps: true }
);

// Wireless Speakers Schema
const wirelessSpeakersSchema = new Schema(
  {
    ...baseProductSchema,
    totalPower: Number, // in watts
    connectivity: {
      bluetooth: {
        version: String,
        range: Number,
      },
    },
    waterResistance: String,
    batteryCapacity: Number, // in mAh
  },
  { versionKey: false, timestamps: true }
);

// Wired Headphones Schema
const wiredHeadphonesSchema = new Schema(
  {
    ...baseProductSchema,
    driverSize: Number,
    cableLength: Number,
    impedance: Number,
    frequency: {
      min: Number,
      max: Number,
    },
    connector: String, // 3.5mm, 6.35mm, etc.
  },
  { versionKey: false, timestamps: true }
);

// Wired Earphones Schema
const wiredEarphonesSchema = new Schema(
  {
    ...baseProductSchema,
    driverSize: Number,
    cableLength: Number,
    impedance: Number,
    connector: String,
    micIncluded: Boolean,
  },
  { versionKey: false, timestamps: true }
);

// Soundbar Schema
const soundbarSchema = new Schema(
  {
    ...baseProductSchema,
    totalPower: Number,
    channels: Number,
    connectivity: {
      bluetooth: {
        version: String,
        range: Number,
      },
    },
    subwoofer: {
      included: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        enum: ["Wireless", "Wired"],
        default: "Wired",
      },
    },
    mountable: Boolean,
  },
  { versionKey: false, timestamps: true }
);

// Gaming Headphones Schema
const gamingHeadphonesSchema = new Schema(
  {
    ...baseProductSchema,
    driverSize: Number,
    surroundSound: Boolean,
    micType: String,
    rgb: Boolean,
    compatibility: {
      android: Boolean,
      ios: Boolean,
    },
    cableLength: Number,
  },
  { versionKey: false, timestamps: true }
);

// Create models
const TrueWireless = model("TrueWireless", trueWirelessSchema);
const Neckband = model("Neckband", neckbandSchema);
const SmartWatch = model("SmartWatch", smartWatchSchema);
const Nirvana = model("Nirvana", nirvanaSchema);
const WirelessHeadphones = model(
  "WirelessHeadphones",
  wirelessHeadphonesSchema
);
const WirelessSpeakers = model("WirelessSpeakers", wirelessSpeakersSchema);
const WiredHeadphones = model("WiredHeadphones", wiredHeadphonesSchema);
const WiredEarphones = model("WiredEarphones", wiredEarphonesSchema);
const Soundbar = model("Soundbar", soundbarSchema);
const GamingHeadphones = model("GamingHeadphones", gamingHeadphonesSchema);

module.exports = {
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
};
