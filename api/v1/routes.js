const express = require('express');
const router = express.Router();

const user = require("./user/routes")
router.use("/user", user)

const profil = require("./profil/routes")
router.use("/profil", profil)

const post = require("./posting/routes")
router.use("/post",post)

const homepage = require("./homepage/routes")
router.use("/home",homepage)

const explore = require("./explore/routes")
router.use("/explore",explore)


module.exports = router 