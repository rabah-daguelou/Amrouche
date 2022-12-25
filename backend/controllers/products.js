const express = require("express");

const mysql = require("mysql");
const db= require ('../database.js')
const jwt = require("jsonwebtoken");

// const multer = require("multer");
// const cors = require("cors");
// const fs = require("fs");

// const { isContext } = require("vm");

require("dotenv").config();

// 1- Afficher tous les produits

exports.getAllProducts= (req, res, next ) => {
    let sqlRequest= "SELECT * FROM products"
    db.query( sqlRequest, (error, results)=> {
        if (error) {
            console.log ( "Erreur BDD!", error)
        } else {
            console.log(" All Products: ", results)
            res.status(200).json(results)
        }
    })
}

// 2- Publier/ Ajouter un produit

exports.addProduct= ( req, res, next)=> {
    console.log ("Req:", req.body)
}
