const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const edit = (req, res) =>{
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    const nohp = req.body.nohp
    const id_user = req.params.id_user
    

    // QUERY UPDATE DATA PADA TABEL USERS
    con.query('UPDATE tbl_users SET username=?, password=?, email=?, nohp=? WHERE id_user=?',
    [username, password, email, nohp, id_user],(err, result)=>{
    // JIKA SQL ERROR
        if(err){
    const response = new baseResponse(5000, err.sqlMessage)
        return res.status(500).json(response)
    }
    else {
    //   QUERY RESPON JSON SAAT BARU UPDATE DATA USER
        con.query("SELECT * FROM tbl_users WHERE id_user=?",[id_user],(err, result)=>{
        if(err){
            const response = new baseResponse(5000, err.sqlMessage)
                return res.status(500).json(response)
        }
        // MENAMPILKAN DATA JSON SETELAH BERHASIL UPDATE DATA USER
        const response = new baseResponse(2000, "Update Data Succesfull").withDataObject(result)
        return res.status(200).json(response)

        })
        
} })}

module.exports = edit