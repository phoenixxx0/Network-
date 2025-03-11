const express = require("express");
const cors = require("cors");
const speedTestRoutes = require("./routes/speedTestRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/speedtest", speedTestRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
