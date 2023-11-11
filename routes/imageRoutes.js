const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req,res) => {
    Controllers.imageController.getImage(res);
})

router.post('/create', (req, res) => {
    Controllers.imageController.createImage(req.body, res)
})


module.exports = router;
