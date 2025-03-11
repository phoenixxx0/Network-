import React, { useState, useEffect } from "react";

const SpeedTest = () => {
  const [speedData, setSpeedData] = useState(null);

  useEffect(() => {
    const fetchSpeed = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/speedtest");
        const data = await response.json();
        setSpeedData({
          download: data.download.toFixed(2),
          upload: data.upload.toFixed(2),
          ping: data.ping.toFixed(2),
        });
      } catch (error) {
        console.error("Error fetching speed test data:", error);
      }
    };

    fetchSpeed();
    const interval = setInterval(fetchSpeed, 30000); // Fetch every 30 sec
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="text-center bg-gray-800 text-white p-4 rounded-lg">
      <h2 className="text-xl font-bold">Real-Time Network Speed</h2>
      {speedData ? (
        <div className="mt-2">
          <p className="text-2xl font-semibold">Download: {speedData.download} Mbps</p>
          <p className="text-2xl font-semibold">Upload: {speedData.upload} Mbps</p>
          <p className="text-2xl font-semibold">Ping: {speedData.ping} ms</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SpeedTest;
