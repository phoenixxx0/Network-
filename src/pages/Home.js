import React from "react";

import { Link } from "react-router-dom";
import SpeedTest from "../components/SpeedTest";
import BarChart from "../components/ui/charts/BarChart";
import LineChart from "../components/ui/charts/LineChart";

const Home = () => {
  return (
    <div className="p-4 text-center relative min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to Bandwidth Dashboard</h1>
      <p className="mt-2 text-gray-700">Monitor and manage network bandwidth in real time.</p>

      {/* Speed Test Component */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
        <SpeedTest />
      </div>

      {/* Graphical representation in the bottom-right corner */}
      <div className="fixed bottom-4 right-4 flex gap-4">
        <div className="bg-white p-2 rounded-lg shadow-md w-40 h-32 flex items-center justify-center">
          <BarChart />
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md w-40 h-32 flex items-center justify-center">
          <LineChart />
        </div>
      </div>

      <div className="mt-6">
        <Link to="/dashboard" className="px-5 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Go to Dashboard
        </Link>
      </div>
      
      {/* Redirect to LibreSpeed UI */}
      <div className="mt-4">
        <button 
          onClick={() => window.location.href = "http://localhost/librespeed"} 
          className="px-5 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
          Run Speed Test
        </button>
      </div>
    </div>
  );
};

export default Home;
