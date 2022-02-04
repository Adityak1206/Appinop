const router = require("express").Router();
const productController = require('../controllers/productController');
router.post("/", productController.new_Product);
router.get("/", productController.product_all);
router.get("/:productId", productController.single_product);
router.put("/:productId", productController.update_Product);
router.delete("/:productId", productController.delete_Product);

module.exports = router;