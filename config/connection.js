require("dotenv").config();
const mysql = require("mysql")

const con = mysql.createPool(
    {
        connectionLimit : 10,
        host : process.env.ENV_DB_HOST,
        user : process.env.ENV_DB_USER,
        password : process.env.ENV_DB_PASSWORD,
        database : process.env.ENV_DB_DATABASE,
        charset : process.env.ENV_DB_CHARSET,
        multipleStatemnts : true,
        debug :["ComQueryPacket","RowDataPacket"]
    }    
)

con.on("acquire", (connection)=>{
    console.log("Connection acquire", connection.threadId);
})

con.on("release", (connection)=> {
    console.log("Connection release", connection.threadId)
})

module.exports = con