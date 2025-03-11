const speedTest = require("speedtest-net");

const runSpeedTest = async (req, res) => {
  try {
    const test = await speedTest({ acceptLicense: true });
    res.json({
      download: test.download.bandwidth / 125000, // Convert from bytes to Mbps
      upload: test.upload.bandwidth / 125000,
      ping: test.ping.latency,
    });
  } catch (error) {
    res.status(500).json({ error: "Speed test failed", details: error.message });
  }
};

module.exports = { runSpeedTest };
