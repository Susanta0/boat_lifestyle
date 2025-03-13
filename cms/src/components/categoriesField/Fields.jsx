import React from "react";

const ChargingCase = ({ handleChange, formData }) => {
  return (
    <>
      <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
        Charging Case
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Battery Life (hrs) *
          </label>
          <input
            type="number"
            name="chargingCase.batteryLife"
            placeholder="20"
            value={formData.chargingCase.batteryLife}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type *
          </label>
          <input
            type="text"
            name="chargingCase.type"
            placeholder="Type-C"
            value={formData.chargingCase.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

const NoiseControl = ({ handleChange, formData }) => {
  return (
    <div className="mb-4">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="noiseControl"
          checked={formData.noiseControl}
          onChange={handleChange}
          className="mr-2"
        />
        <span className="text-sm font-medium text-gray-700">Noise Control</span>
      </label>
    </div>
  );
};

const WaterResistance = ({ handleChange, formData }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Water Resistance
      </label>
      <input
        type="text"
        name="waterResistance"
        placeholder="IPX7"
        value={formData.waterResistance}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const Connectivity = ({ handleChange, formData }) => {
  return (
    <>
      <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
        Connectivity
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bluetooth Version
          </label>
          <input
            type="text"
            name="connectivity.bluetooth.version"
            placeholder="5.0"
            value={formData.connectivity.bluetooth.version}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Range (m)
          </label>
          <input
            type="number"
            name="connectivity.bluetooth.range"
            placeholder="10"
            value={formData.connectivity.bluetooth.range}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

const DriverSize = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Driver Size (mm)
      </label>
      <input
        type="number"
        name="driverSize"
        placeholder="10"
        value={formData.driverSize}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const DisplayType = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Display Type
      </label>
      <input
        type="text"
        name="displayType"
        placeholder="OLED"
        value={formData.displayType}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const ScreenSize = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Screen Size
      </label>
      <input
        type="number"
        name="screenSize"
        placeholder="1.5"
        value={formData.screenSize}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const Resolution = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Resolution
      </label>
      <input
        type="text"
        name="resolution"
        placeholder="108x120"
        value={formData.resolution}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const HealthFeatures = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Health Features
      </label>
      <input
        type="text"
        name="healthFeatures"
        placeholder="Heart Rate Monitor"
        value={formData.healthFeatures}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const Compatibility = ({ handleChange, formData }) => {
  return (
    <>
      <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
        compatibility
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="compatibility.android"
              checked={formData.compatibility.android}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm font-medium text-gray-700">android</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="compatibility.ios"
              checked={formData.compatibility.ios}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm font-medium text-gray-700">ios</span>
          </label>
        </div>
      </div>
    </>
  );
};

const DriverType = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Driver Type
      </label>
      <input
        type="text"
        name="driverType"
        placeholder="Dynamic"
        value={formData.driverType}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const Frequency = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Frequency
      </label>
      <input
        type="number"
        name="frequency"
        placeholder="20"
        value={formData.frequency}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const Impedance = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        impedance
      </label>
      <input
        type="number"
        name="impedance"
        placeholder="20"
        value={formData.impedance}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const Premium_Features = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Premium Features
      </label>
      <input
        type="text"
        name="premium_features"
        placeholder="Active Noise Cancellation"
        value={formData.premium_features}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const Foldable = ({ handleChange, formData }) => {
  return (
    <div className="mb-4">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="foldable"
          checked={formData.foldable}
          onChange={handleChange}
          className="mr-2"
        />
        <span className="text-sm font-medium text-gray-700">Foldable</span>
      </label>
    </div>
  );
};

const TotalPower = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Total Power
      </label>
      <input
        type="number"
        name="totalPower"
        placeholder="20"
        value={formData.totalPower}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const BatteryCapacity = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Battery Capacity
      </label>
      <input
        type="number"
        name="batteryCapacity"
        placeholder="20"
        value={formData.batteryCapacity}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const CableLength = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Cable Length
      </label>
      <input
        type="number"
        name="cableLength"
        placeholder="20"
        value={formData.cableLength}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};
const Connector = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Connector
      </label>
      <input
        type="text"
        name="connector"
        placeholder="3.5mm"
        value={formData.connector}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const MicIncluded = ({ handleChange, formData }) => {
  return (
    <div className="mb-4">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="micIncluded"
          checked={formData.micIncluded}
          onChange={handleChange}
          className="mr-2"
        />
        <span className="text-sm font-medium text-gray-700">Mic Included</span>
      </label>
    </div>
  );
};

const Channels = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Channels
      </label>
      <input
        type="number"
        name="channels"
        placeholder="20"
        value={formData.channels}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const Subwoofer = ({ handleChange, formData }) => {
  return (
    <>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="subwoofer.included"
            checked={formData.subwoofer.included}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-sm font-medium text-gray-700">
            Subwoofer Included
          </span>
        </label>
      </div>
      <div className="mb-4 mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Type
        </label>
        <input
          type="text"
          name="subwoofer.type"
          placeholder="Wireless"
          value={formData.subwoofer.type}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
    </>
  );
};

const Mountable = ({ handleChange, formData }) => {
  return (
    <div className="mb-4">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="mountable"
          checked={formData.mountable}
          onChange={handleChange}
          className="mr-2"
        />
        <span className="text-sm font-medium text-gray-700">Mountable</span>
      </label>
    </div>
  );
};

const SurroundSound = ({ handleChange, formData }) => {
  return (
    <div className="mb-4">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="surroundSound"
          checked={formData.surroundSound}
          onChange={handleChange}
          className="mr-2"
        />
        <span className="text-sm font-medium text-gray-700">
          Surround Sound
        </span>
      </label>
    </div>
  );
};

const MicType = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Mic Type
      </label>
      <input
        type="text"
        name="micType"
        placeholder="Dynamic"
        value={formData.micType}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

const Rgb = ({ handleChange, formData }) => {
  return (
    <div className="mb-4">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="rgb"
          checked={formData.rgb}
          onChange={handleChange}
          className="mr-2"
        />
        <span className="text-sm font-medium text-gray-700">RGB</span>
      </label>
    </div>
  );
};

const ImagesField = ({ handleChange, formData }) => {
  return (
    <div className="mb-4 mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Images
      </label>
      {formData.images.map((image, index) => (
        <div key={index} className="mb-2">
          <input
            type="text"
            name={`images[${index}]`}
            placeholder={`Image URL ${index + 1}`}
            value={image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mb-2"
          />
        </div>
      ))}
      {formData.images.length > 0 && (
        <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <div className="flex justify-center flex-wrap">
            {formData.images.map(
              (image, index) =>
                image && (
                  <img
                    key={index}
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="h-20 w-20 object-contain rounded mb-2 mx-1"
                  />
                )
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">All Images Preview</p>
        </div>
      )}
    </div>
  );
};

export {
  ChargingCase,
  NoiseControl,
  WaterResistance,
  Connectivity,
  DriverSize,
  DisplayType,
  ScreenSize,
  Resolution,
  HealthFeatures,
  Compatibility,
  DriverType,
  Frequency,
  Impedance,
  Premium_Features,
  Foldable,
  TotalPower,
  BatteryCapacity,
  CableLength,
  Connector,
  MicIncluded,
  Channels,
  Subwoofer,
  Mountable,
  SurroundSound,
  MicType,
  Rgb,
  ImagesField,
};
