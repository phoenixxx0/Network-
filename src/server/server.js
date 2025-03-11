const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Speed Test API using LibreSpeed
app.get("/api/speedtest", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8080/api.php?json=true");
    res.json({
      download: response.data.download.toFixed(2),
      upload: response.data.upload.toFixed(2),
      ping: response.data.ping.toFixed(2),
    });
  } catch (error) {
    console.error("Speed test failed:", error);
    res.status(500).json({ error: "Speed test failed" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
