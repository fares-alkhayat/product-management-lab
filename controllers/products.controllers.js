const Product = require("../models/Product")

async function createProduct(req,res){
  try {
    const { name, description, category, price, quantity } = req.body; // destructures the req.body
    const createdProduct = await Product.create({
      name: name,
      description: description,
      category: category,
      price: price,
      quantity: quantity
    });
    res.status(201).json(createdProduct);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }

    if (err.code === 11000) {
      return res
        .status(409)
        .json({ message: "There is a product with this name that already exists. Please suggest another name." });
    }
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAllProducts(req,res){
    try {
        const allProducts = await Product.find()
        res.status(200).json(allProducts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error. Please try again later."})
    }
}

async function getOneProduct(req,res) {
  try {
    const foundProduct = await Product.findById(req.params.productId);
    if (!foundProduct) return res.status(404).json({message: "The product you are looking for has not been found."})
      res.status(200).json(foundProduct);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateProduct(req,res) {
  try {
    const { name, description, category, price, quantity } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, { name, description, category, price, quantity }, {returnDocument: "after", runValidators: true}, );

    if (!updatedProduct) {
      return res.status(404).json({ message: "The product you are trying to update has not been found."});
    } res.status(200).json(updatedProduct);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message }); }

      if (err.code === 11000) {
      return res.status(409).json({ message: "There is a product with this name that already exists. Please suggest another name." });
    }
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteProduct(req,res){
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "The product you are trying to update has not been found." });
    }
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}