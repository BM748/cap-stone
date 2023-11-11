const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req,res) => {
    Controllers.reviewController.getReview(res);
})

router.post('/create', (req, res) => {
    Controllers.reviewController.createReview(req.body, res)
})


module.exports = router;
