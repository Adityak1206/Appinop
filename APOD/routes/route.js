const router = require("express").Router();
const apodfunc = require('../model/apodfunc');
router.post("/", apodfunc.getData);
router.post("/", apodfunc.setData);

module.exports = router;