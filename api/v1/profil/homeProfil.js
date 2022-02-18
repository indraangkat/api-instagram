const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const getAll = (req, res)=>{
    // QUERY UNTUK MENAMPILKAN SEMUA ISI TABLE MATAKULIAH
    con.query("SELECT * FROM tbl_profil", (err, result)=>{
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