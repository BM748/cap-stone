"use strict";

const Models = require("../models");

const getArtists = (res) => {
    Models.Artist.findAll({}).then(function (data) {
        res.send({result:200, data:data})
    }).catch(err =>{
        console.log(err);
    })
}

const createArtists = (data, res) => {
    Models.Artist.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err =>{
        console.log(err);
    })
  
}

module.exports = {
    getArtists,
    createArtists

}