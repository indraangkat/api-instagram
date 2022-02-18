const express = require('express');
const router = express.Router();

const login = require("./login")
const registrasi = require("./registrasi")
const logout = require("./logout")

const {v_user_login, v_user_register} = require("./../../middleware/validasi")

router.post("/login",v_user_login,login)
router.post("/registrasi",v_user_register, registrasi)
router.put("/logout",logout)




module.exports = router 