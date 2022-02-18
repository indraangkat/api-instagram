const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const findByUsername = (req,res)=>{
    const username = req.body.username

    // CHECK MENAMPILKAN ISI TABLE USERS DENGAN BERDASARKAN ID YANG DICARI
    con.query ("select * from tbl_profil where username =?",[username],
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
    module.exports = findByUsername