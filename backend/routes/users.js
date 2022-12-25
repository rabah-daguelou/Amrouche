const express = require("express");
const router = express.Router();

const usersCtrl = require("../controllers/users");
const checkEmail = require("../middlewares/checkEmail");
const checkPassword = require("../middlewares/checkPassword");
const checkUserName = require("../middlewares/checkUserName");
// const auth = require("../middlewares/auth");
// const multer = require("../middlewares/multer_config");

// S'inscrire
router.post('/signIn', checkEmail, checkPassword, checkUserName, usersCtrl.signIn);

// Se connecter
router.post('/login', checkEmail, checkPassword, usersCtrl.login)





module.exports = router;
