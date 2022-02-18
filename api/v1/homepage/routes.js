const express = require('express');
const router = express.Router();

const getAll = require("./homepage")

router.get("",getAll);




module.exports = router 