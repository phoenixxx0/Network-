const express = require("express");
const router = express.Router();
const speedTest = require("speedtest-net");

// Route to get real-time speed test results
router.get("/", async (req, res) => {
    try {
        const result = await speedTest({ acceptLicense: true, acceptGdpr: true });
        res.json({ download: result.download.bandwidth / 125000 }); // Convert to Mbps
    } catch (error) {
        console.error("Speed test failed:", error);
        res.status(500).json({ error: "Speed test failed" });
    }
});

module.exports = router;
