const express = require('express');
const router = express.Router();
const multer = require('../../../config/multer')
const upload = require("./upload")
const edit = require("./editProfil")
const getAll = require("./homeProfil")

const{v_user_editprofil} = require('../../middleware/validasi')

router.post("/upload/:id_user", multer.fields([
    {name: 'foto_profil', maxCount:1},
    {name:'image', maxCount:10}
]),upload)
router.put("/edit/:id_user",v_user_editprofil,edit)
router.get("",getAll)



module.exports = router 