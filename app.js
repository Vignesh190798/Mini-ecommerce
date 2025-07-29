const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDatabase = require("../backend/DB/ConnectDB");

// Load environment variables (Render will inject envs automatically)
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDatabase();

// Routes
const products = require("./routes/product");
const orders = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", orders);

// Health check route
app.get("/", (req, res) => {
  res.send("API is working!");
});

// Dynamic port for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
