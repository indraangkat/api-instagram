const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const getAll = (req, res)=>{
    // QUERY UNTUK MENAMPILKAN SEMUA ISI TABLE MATAKULIAH
    con.query("SELECT tbl_post.id_post, tbl_users.username FROM tbl_home INNER JOIN tbl_post ON tbl_home.id_post = tbl_post.id_profil INNER JOIN tbl_users ON tbl_home.id_user = tbl_users.id_user", (err, result)=>{
    //   JIKA SQL ERROR
        if(err){
           const response = new baseResponse(5000, err.sqlMessage)
           return res.status(500).json(response)
        }
        // JIKA DATA DITEMUKAN
        if(result.length > 0 ){
            const response = new baseResponse().withDataList(result)
           return res.status(200).json(response)
        }
        // JIKA DATA TIDAK DITEMUKAN
        else {
            const response = new baseResponse(4004,"Data Not Found")
           return res.status(404).json(response)
        }

    })
}

module.exports = getAll