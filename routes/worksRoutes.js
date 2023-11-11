const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.worksController.getWorks(res);
})

router.post('/create', (req, res) => {
    Controllers.worksController.createWorks(req.body, res)
})


module.exports = router;