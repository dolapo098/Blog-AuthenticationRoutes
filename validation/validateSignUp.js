const Joi= require('@hapi/joi');

const signUpSchema= Joi.object().keys({
    fullname: Joi.string().allow('').min(3).max(30).required(),
    username: Joi.string().allow('').alphanum().min(3).max(30).required(),
    email: Joi.string().allow('').email({ minDomainSegments: 2 }),
    password: Joi.string().allow('').alphanum().min(3).max(30).required(), /*Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),*/
   })
module.exports= signUpSchema;