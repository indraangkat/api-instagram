const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const findByPost = (req,res)=>{
    const id_post = req.params.id_post

    // CHECK MENAMPILKAN ISI TABLE USERS DENGAN BERDASARKAN ID YANG DICARI
    con.query (`SELECT tbl_post.id_post, tbl_post.like, tbl_post.comment, tbl_post.date_post, tbl_profil.image,tbl_users.username FROM tbl_post INNER JOIN tbl_profil ON tbl_post.id_profil = tbl_profil.id_profil INNER JOIN tbl_users ON tbl_profil.id_user = tbl_users.id_user WHERE tbl_post.id_post LIKE '%${id_post}%'`, 
    (err, result)=>{
    //   JIKA SQL ERROR
        if(err){
            const response = new baseResponse(5000, err.sqlMessage)
            return res.status(500).json(response)
        }
    //    JIKA ID YANG DICARI ADA 
        if(result.length > 0){

            //With Data Object Hanya menampilkan 1 data aja yang diambil dari result pada posisi pertama = [0]
            const response = new baseResponse().withDataObject (result)
            return res.status(200).json(response)
        } 
        // JIKA ID YANG DICARI TIDAK ADA
        else{
            const response = new baseResponse(4004, "Data Not Found")
            return res.status(404).json(response)
        }
    })
}
    module.exports = findByPost