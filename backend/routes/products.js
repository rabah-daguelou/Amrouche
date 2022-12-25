const express = require("express");
const router = express.Router();

const productsCtrl = require("../controllers/products");

// const auth = require("../middlewares/auth");
// const multer = require("../middlewares/multer_config");

// 1- Afficher tous les produits
router.get('/products', productsCtrl.getAllProducts);

// 2- Publier un produit
router.post ('/products', productsCtrl.addProduct)




module.exports = router;