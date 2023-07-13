const express = require('express');
const router = express.Router();
const controller = require("../controllers/skill")

/* GET users listing. */
router.get('/', controller.index); 
router.get("/new", controller.new);
router.get("/:id", controller.show);


router.post("/", controller.create);
router.delete("/:id", controller.deleteSkill)
module.exports = router;
