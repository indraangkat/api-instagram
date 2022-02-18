const jwt = require('jsonwebtoken')
const BaseResponse = require('../../utils/BaseResponse')
const con = require('../../config/connection')

const TokenValidate =  (req, res, next) => {
    const authHeader = req.headers["authorization"] || req.headers["Authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(token == null)   {
        let response = new BaseResponse(4001, "Unauthorized")
        return res.status(401).json(response)
    }

    jwt.verify(token, process.env.JWT_SECRET,  (err, user) =>{
        if(err) {
            let response = new BaseResponse(4001, err.message)
            return res.status(401).json(response)
        }
        con.query(`SELECT * FROM tbl_users WHERE token= ?`,[user.jti],(err, result) =>{
            if(err){
                let response = new BaseResponse(5000, err.sqlMessage)
                return res.status(500).json(response)
            }
        
        if(result.length > 0) {
            if(result[0].token === user.jti){
                req.user = user;
                return next();
            }
        }
        let response = new BaseResponse(4001, "Invalid Token")
        return res.status(401).json(response);
    })})
}
module.exports = TokenValidate