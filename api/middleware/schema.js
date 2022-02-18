const Joi = require('joi');

const schema = class schema {
    static schema_user_login() {
      return Joi.defaults((schema) =>
        schema.options({
          allowUnknown: true,
        })
      ).object({
        username: Joi.string().required(),
        password: Joi.string().min(6).max(12).required(),
      });
    }

    static schema_user_register() {
        return Joi.defaults((schema) =>
          schema.options({
            allowUnknown: true,
          })
        ).object({
          username: Joi.string().required(),
          password: Joi.string().min(6).max(12).required(),
          email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
          nohp: Joi.string().required(),
        });
      }

      static schema_user_editprofil() {
        return Joi.defaults((schema) =>
          schema.options({
            allowUnknown: true,
          })
        ).object({
          username: Joi.string().required(),
          password: Joi.string().min(6).max(12).required(),
          email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
          nohp: Joi.string().required(),
        });
      }




}

module.exports = schema