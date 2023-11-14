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

const loginUser = async(req, res)=>{
    const{emailId, password} = req.body;

    try{
        const user = await Models.User.findOne({where:{emailId}});

        if(user && user.password === password){
            res.json({loggedIn: true});
        } else {
            res.json({loggedIn: false})
        }

        res.json({data: user})
    } catch (e){
        console.error('Error logging in user!', e)
    }
}

module.exports = {
    getUsers,
    createUsers,
    loginUser
}