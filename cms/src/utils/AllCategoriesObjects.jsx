export const baseProductSchema = {
  name: "",
  image: "",
  description: "",
  playbackHours: "",
  rating: "",
  price: "",
  colors: [
    { name: "", code: "" },
    { name: "", code: "" },
  ],
  beforeOfferPrice: "",
  discountPercentage: "",
  stock: "",
};

// Wireless category specific schema
export const trueWirelessSchema = {
  ...baseProductSchema,
  chargingCase: {
    batteryLife: "",
    type: "",
  },
  noiseControl: false,
  waterResistance: "",
  connectivity: {
    bluetooth: {
      version: "",
      range: "",
    },
  },
}; 

export const neckbandSchema = {
  ...baseProductSchema,
  noiseControl: false,
  waterResistance: "",
  driverSize: "",
  connectivity: {
    bluetooth: {
      version: "",
      range: "",
    },
  },
};

export const smartWatchSchema = {
  ...baseProductSchema,
  displayType: "",
  screenSize: "",
  resolution: "",
  healthFeatures: [],
  compatibility: {
    android: false,
    ios: false,
  },
  waterResistance: "",
};

export const nirvanaSchema = {
  ...baseProductSchema,
  driverType: "",
  impedance: "",
  frequency: {
    min: "",
    max: "",
  },
  premium_features: [],
};

export const wirelessHeadphonesSchema = {
  ...baseProductSchema,
  noiseControl: false,
  driverSize: "",
  foldable: false,
  connectivity: {
    bluetooth: {
      version: "",
      range: "",
    },
  },
};

export const wirelessSpeakersSchema = {
  ...baseProductSchema,
  totalPower: "",
  connectivity: {
    bluetooth: {
      version: "",
      range: "",
    },
  },
  waterResistance: "",
  batteryCapacity: "",
};

export const wiredHeadphonesSchema = {
  ...baseProductSchema,
  driverSize: "",
  cableLength: "",
  impedance: "",
  frequency: {
    min: "",
    max: "",
  },
  connector: "",
};

export const wiredEarphonesSchema = {
  ...baseProductSchema,
  driverSize: "",
  cableLength: "",
  impedance: "",
  micIncluded: false,
  connector: "",
};

export const soundbarSchema = {
  ...baseProductSchema,
  totalPower: "",
  channels: "",
  connectivity: {
    bluetooth: {
      version: "",
      range: "",
    },
  },
  subwoofer: {
    included: false,
    type: "",
  },
  mountable: false,
};

export const gamingHeadphonesSchema = {
  ...baseProductSchema,
  driverSize: "",
  cableLength: "",
  surroundSound: false,
  micType: "",
  rgb: false,
  compatibility: {
    android: false,
    ios: false,
  },
};

export const getInitialSchema = (category) => {
  switch (category) {
    case "True Wireless Earbuds":
      return trueWirelessSchema;
    case "Neckbands":
      return neckbandSchema;
    case "Smart Watches":
      return smartWatchSchema;
    case "Nirvana":
      return nirvanaSchema;
    case "Wireless Headphones":
      return wirelessHeadphonesSchema;
    case "Wireless Speakers":
      return wirelessSpeakersSchema;
    case "Wired Headphones":
      return wiredHeadphonesSchema;
    case "Wired Earphones":
      return wiredEarphonesSchema;
    case "Soundbars":
      return soundbarSchema;
    case "Gaming Headphones":
      return gamingHeadphonesSchema;
    default:
      return baseProductSchema;
  }
};
