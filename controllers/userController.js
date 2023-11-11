"use strict";

const Models = require("../models");

const getUsers = (res) => {
    Models.User.findAll({}).then(function (data) {
        res.send({result:200, data:data})
    }).catch(err =>{
        console.log(err);
    })
}

const createUsers = (data, res) => {
    Models.User.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err =>{
        console.log(err);
    })
  
}

module.exports = {
    getUsers,
    createUsers
}