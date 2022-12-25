const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const db= require ('../database.js')
const jwt = require("jsonwebtoken");

// const multer = require("multer");
// const cors = require("cors");
// const fs = require("fs");

// const { isContext } = require("vm");

require("dotenv").config();

// 1- S'inscrire //  signIn

exports.signIn = (req, res, next)=> {
    const password= req.body.password;
    console.log ('Password:', password)
    // Hacher le mot de passe
    bcrypt.hash(password,10)
    .then ((hash)=> {
        const user= {
            email: req.body.email,
            password: hash,
            name: req.body.userName
        };

        // Vérifier l'existance de l'Email dans la bdd
        db.query(
            "SELECT * FROM users WHERE email=? ", user.email, (err, results)=> {
                if (err ) { 
                    console.log(' Erreur Bdd !')
                    res.status(500).json("Erreur BDD !")
                    //throw err;
                } else {
                    if (parseInt(results.length)>0) {
                        res.status(401).json ({
                            type: "error",
                            message: ' Cette adresse email est déjà utilisée!'
                        })
                    } 
            // Enregistrer le user dans la bdd        
                    else {
                    db.query(
                        "INSERT INTO users SET ?", [user], (err, results)=> {
                            if (err) {
                                console.log (" Erreur Bdd !");
                                res.status(500).json("Erreur BDD !")
                                //throw err;
                            } else {
                                console.log ( " Utilisateur enregistré avec succès!");
                                res.status(200).json({
                                    message: " Utilisateur enregistré avec succès !",
                                    data: results})
                            }
                        })
                    }
                }
            } 
        )
    })
}

// 2/ Se connecter ...

exports.login= (req, res, next) =>{
    
    // Vérifier l'email dans la BDD
    db.query(
        `SELECT * FROM users WHERE email=?`, req.body.email,
        (error, results) => {

            // Erreur BDD
            if (error) {
                console.log (" Erreur BDD !");
                res.status(500).json(" Erreur BDD !")
            } else {
                console.log (results)
                if (results.length>0) {
                    console.log ("Oui! J'ai le même Email dans la BDD !");
                    
            // L'utilisateur existe dans la BDD
                    // Comparer les mots de passe

                    bcrypt.compare(req.body.password, results[0].password)
                    .then ((valid)=>{
                        // Mot de passe invalide
                        if (!valid) {
                            console.log (' Le mot de passe ne correspond pas !');
                            res.status(401).json(' Votre mot de passe est incorrect !');
                        } else {
                        // Mot de passe valide .... Donner un Token  
                           console.log (' Le mot de passe est correct !')
                            res
                            .status(200)
                            .json({
                                message: ' Connexion réussie !',
                                userId: results[0].userId,
                                isAdmin: results[0].isAdmin,
                                userName: results[0].name,
                                profil_picture: results[0].profil_picture,

                                token: jwt.sign(
                                    {userId: results[0].userId},
                                    process.env.secretToken,
                                    { expiresIn: "1h"}
                                )                       
                            })
                        }
                    })
                } else {
            
            // L'utilisateur n'éxiste pas dans la BDD
                    console.log ("Cet Email n'existe pas!");
                    res.status(404).json({
                        type: "Error",
                        message: " Cet Email n'existe pas! "
                    })
                }
            }
        }
    )
}