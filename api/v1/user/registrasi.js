const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const registrasi = (req, res) =>{
    const username = req.body.username
    const password = req.body.password
    const nohp = req.body.nohp
    const email = req.body.email

    con.query("SELECT COUNT(*) as CNT FROM tbl_users WHERE username = ?", [username],
    (err,result) => {
        // JIKA SQL ERROR  
         if(err){
            const response = new baseResponse(5000, err.sqlMessage)
        return res.status(500).json(response)
        } 
      //   JIKA EMAIL SUDAH DIPAKAI
        else{
            if(result[0].CNT > 0){
                const response = new baseResponse(4009,"USERNAME SUDAH DIPAKAI")
        return res.status(409).json(response)
            }

            con.query("SELECT COUNT(*) as CNT FROM tbl_users WHERE email = ?", [email],
    (err,result) => {
        // JIKA SQL ERROR  
         if(err){
            const response = new baseResponse(5000, err.sqlMessage)
        return res.status(500).json(response)
        } 
      //   JIKA EMAIL SUDAH DIPAKAI
        else{
            if(result[0].CNT > 0){
                const response = new baseResponse(4009,"EMAIL SUDAH DIPAKAI")
        return res.status(409).json(response)
            }
            con.query("SELECT COUNT(*) as CNT FROM tbl_users WHERE nohp = ?", [nohp],
            (err,result) => {
                // JIKA SQL ERROR  
                 if(err){
                    const response = new baseResponse(5000, err.sqlMessage)
                return res.status(500).json(response)
                } 
              //   JIKA EMAIL SUDAH DIPAKAI
                else{
                    if(result[0].CNT > 0){
                        const response = new baseResponse(4009,"NO HP SUDAH DIPAKAI")
                return res.status(409).json(response)
                    }

               
         // CHECK REQ UNTUK MELAKUKAN PENGISIAN FORM REGISTER   
          con.query("INSERT INTO tbl_users (username, password, nohp, email) VALUES (?,?,?,?)", [username, password, nohp, email],
          (err,result)=>{
            // JIKA SQL ERROR 
            if(err){
                  const response = new baseResponse(5000, err.sqlMessage)
                  return res.status(500).json(response)
              }
            //   JIKA USER BERHASIL REGISTER
              const response = new baseResponse(2000, "Created Data Succesfull")
              return res.status(200).json(response)
          })    
        } }     
        )
      }})
    }})
    
    }
       
   

        

module.exports = registrasi