const ResponseValidation = (error, res) => {
    return res.status(400).json({
        meta:{
            code:4000, 
            message:error.details[0].message.replace(/"/g, '')
        }
    })
}

module.exports = ResponseValidation