const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.artistController.getArtists(res);
})

router.post('/create', (req, res) => {
    Controllers.artistController.createArtists(req.body, res)
})


module.exports = router;