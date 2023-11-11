"use strict";

const Models = require("../models");



const  getReview = (res) => {
    Models.Review.findAll({}).then(function (data) {
        res.send({result:200, data:data})
    }).catch (err =>{
        console.log(err);
    })
}
const createReview = (data, res) => {
    Models.Comment.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err =>{
        console.log(err);
    })
  
}

module.exports={
    getReview,
    createReview
}