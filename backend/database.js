const express = require("express");
require('dotenv').config()
const mysql = require("mysql");

// Connexion à la base de données
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});
  
  db.connect(function (err) {
    if (err) {
      throw err;
    }
    console.log("L'application est bien connectée à la base de données Amirouche !");
  });

  module.exports=db