const express = require("express");
const {
  getProducts,
  getSinglePRoduct,
} = require("../controller/productController");
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/products/:id").get(getSinglePRoduct);

module.exports = router;
