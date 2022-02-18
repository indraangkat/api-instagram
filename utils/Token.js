const jwt = require('jsonwebtoken');
const uuid = require('uuid');
require("dotenv").config();

const generateAuthToken = (obj) => {
    const jwtOption = {
        expiresIn: "24h",
        jwtid: uuid.v4(),
    }

    return {
        token: jwt.sign(
            {
                user : {
                    id_user : obj.id_user,
                    username : obj.username,
                    email : obj.email,
                    nohp : obj.nohp,
                }
            },
            process.env.JWT_SECRET,
            jwtOption
        ),
        jwtid: jwtOption.jwtid,
        }
}

module.exports = {generateAuthToken}