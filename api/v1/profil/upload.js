const baseResponse = require('../../../utils/BaseResponse')
const con = require ('../../../config/connection')


const upload = ( req, res)=>{
// MENGGUNAKAN PARAM KARENA PAKAI URL /:ID_USER
    // let id_user = req.body.id_user

    const {image, foto_profil} = req.files

    console.log(req.params.id_user)
    if(!req.files){
        const response = new baseResponse(4000, "Image Tidak ditemukan")
        return res.status(400).json(response)
    } else{  
   
    if(foto_profil){
        console.log(foto_profil[0])
        con.query("UPDATE tbl_profil SET foto_profil=? WHERE id_user=?",[foto_profil[0].filename, req.params.id_user],(err, result)=>{
            if(err){
                console.log(err)
                const response = new baseResponse(5000, err.sqlMessage)
                return res.status(500).json(response)
            } else {
                const response = new baseResponse(2000, "Berhasil Upload Foto Profil")
                return res.status(200).json(response)
            }
        })
    }

    if(image){

        console.log(image)
        con.query("UPDATE tbl_profil SET image=? WHERE id_user=?",[image[0].filename, req.params.id_user],(err, result)=>{
            if(err){
                const response = new baseResponse(5000, err.sqlMessage)
                return res.status(500).json(response)
            } else {
                const response = new baseResponse(2000, "Berhasil Upload Image")
                return res.status(200).json(response)
            }
        })
    }

}
}
module.exports = upload