const multer = require('multer');


const filestorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");
    },
    filename: (req,file,cb)=>{
        const nmFile =  Date.now() + file.originalname
        console.log(55555,nmFile)
        cb(null,nmFile)
    }
})

const fileFilter = (req, file, cb)=>{
if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'){
    cb(null, true);
} else {
    cb(null,false)
}}

module.exports = multer({storage: filestorage, fileFilter})
