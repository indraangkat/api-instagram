const express = require('express');
const router = express.Router();

const getAll = require("./explore")
const search = require("./search")

router.get("",getAll);
router.get("/search",search);




module.exports = router 