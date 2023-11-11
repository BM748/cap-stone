"use strict";

const Models = require("../models");

const getWorks = (res) => {
    Models.Works.findAll({}).then(function (data) {
        res.send({result:200, data:data})
    }).catch(err =>{
        console.log(err);
    })
}

const createWorks = (data, res) => {
    Models.Works.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err =>{
        console.log(err);
    })
  
}

module.exports = {
    getWorks,
    createWorks
}