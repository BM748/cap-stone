"use strict";

const Models = require("../models");

const getImages = (res) => {
    Models.Image.findAll({}).then(function (data) {
        res.send({result:200, data:data})
    }).catch(err =>{
        console.log(err);
    })
}

const createImages = (data, res) => {
    Models.Image.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err =>{
        console.log(err);
    })
  
}

module.exports = {
    getImages,
    createImages

}