const express = require('express');
const router = express.Router();

const findbypost = require("./findByPost")
const findbyusername = require("./findByUsername")

router.get("/findbyusername",findbyusername)
router.get("/:id_post",findbypost)




module.exports = router 