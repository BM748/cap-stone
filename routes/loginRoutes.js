const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.post('/artist', (req, res) => {
    Controllers.artistController.loginArtist(req,res);
})

router.post('/user', (req, res) => {
    Controllers.userController.login(req,res);
})



module.exports = router;