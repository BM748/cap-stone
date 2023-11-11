// 'use strict'
const Artist = require('./artist');
const User = require('./user');
const Review = require('./review');
const Image = require('./image');
const Works = require('./works');


async function init() {
    await Artist.sync()
    await User.sync()
    await Review.sync()
    await Image.sync()
    await Works.sync()
    
};

init()

module.exports = {
    Artist,
    User,
    Review,
    Image,
    Works
   
};