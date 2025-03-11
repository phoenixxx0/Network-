import React from "react";

const Settings = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Settings</h2>
      <p className="text-gray-600">Configure your bandwidth management preferences.</p>

      <div className="mt-4 border p-4 rounded-lg shadow-lg">
        <label className="block mb-2">
          <span className="text-gray-700">Bandwidth Limit (GB):</span>
          <input
            type="number"
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter limit"
          />
        </label>

        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;

