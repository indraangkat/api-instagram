const schema = require("./schema")
const ResponseValidation = require("../../utils/ResponseValidation")


// V = VALIDASI

module.exports = class validation {
    static v_user_login(req, res, next) {
      const { error } = schema.schema_user_login().validate(req.body);
      if(error) {
        return ResponseValidation(error,res)
     }else{
       return next();
     }
    }

    static v_user_register(req, res, next) {
        const { error } = schema.schema_user_register().validate(req.body);
        if(error) {
          return ResponseValidation(error,res)
       }else{
         return next();
       }
      }

    static v_user_editprofil(req, res, next) {
        const { error } = schema.schema_user_editprofil().validate(req.body);
        if(error) {
          return ResponseValidation(error,res)
       }else{
         return next();
       }
      }
    
    
    

}