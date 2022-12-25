const express = require("express");
const app = express();
const cors=require('cors')

require('dotenv').config()
const mysql = require("mysql");


// Définir le port
const port = process.env.PORT;

// Utiliser le module cors 
app.use(cors());
app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
// Utiliser bodyparser sur les body des requettes
app.use(express.json());

const usersRoutes= require ('./routes/users')
const productsRoutes= require ('./routes/products')
// 
app.use('/app/auth', usersRoutes);
app.use('/app', productsRoutes);


app.listen(port, () => console.log(`L'application écoute sur le port ${port}!`));


module.exports=app;