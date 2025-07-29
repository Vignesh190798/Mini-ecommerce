const productModel = require("../models/productModel");

//Get PRoducts API - /api/v1/product
exports.getProducts = async (req, res, next) => {
  try {
    const keyword = req.query.keyword || "";
    const query = keyword
      ? {
          name: {
            $regex: keyword,
            $options: "i",
          },
        }
      : {};

    const products = await productModel.find(query);

    res.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Error in getProducts:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//Get PRoducts API - /api/v1/product/:id
exports.getSinglePRoduct = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "unable to get product",
    });
  }
};
