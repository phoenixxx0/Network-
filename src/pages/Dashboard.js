import React from "react";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Network Bandwidth Dashboard</h2>
      <p className="text-gray-600">View real-time network data and bandwidth allocation.</p>

      <div className="mt-4 border p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-medium">Live Data Charts (Coming Soon)</h3>
        <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">[Charts will be added here]</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

