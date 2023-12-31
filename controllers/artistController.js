"use strict";

const Models = require("../models");

const getArtists = (res) => {
    Models.Artist.findAll({}).then(function (data) {
        res.send({result:200, data:data})
    }).catch(err =>{
        console.log(err);
    })
}

const getArtist = (artistId, res) => {
    Models.Artist.findOne({ where: { id: artistId } })
        .then(function (data) {
            if (data) {
                res.status(200).send({ result: 200, data: data });
            } else {
                res.status(404).send({ result: 404, message: 'Artist not found' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ result: 500, message: 'Internal Server Error' });
        });
};

const createArtists = (req, res) => {
    Models.Artist.create(req.body).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err =>{
        console.log(err);
    })
  
}

const loginArtist = async (req, res) =>{
    // Take email, password from data
    const {emailId, password} = req.body;

   
    try {
         /// Get Artist w/that email from DB
        const artist = await Models.Artist.findOne({where: {emailId}});
  
        // Check if given password matches password from Artist in DB
        if (artist && artist.password === password) {
            res.json({loggedIn: true, artistId: artist.id, userType: 'artist'}); //IF you want to track the loggedIn Artist, then send by the Artist
        } else {
            res.json({loggedIn: false})
        }



        
        res.json({data: artist})

    } catch (e){
        console.error('Error logging in artist!', e);
    }


   


  



}

module.exports = {
    getArtists,
    createArtists,
    loginArtist,
    getArtist
}