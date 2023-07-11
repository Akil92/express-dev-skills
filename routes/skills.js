const express = require('express');
const router = express.Router();
const controller = require("../controllers/skill")

/* GET users listing. */
router.get('/', controller.index); 
router.get("/:id", controller.show);
module.exports = router;
