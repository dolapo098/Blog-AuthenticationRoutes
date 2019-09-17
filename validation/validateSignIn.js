const Joi= require('@hapi/joi');

const signInSchema= Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }),
    password: Joi.string().alphanum().min(3).max(30).required(), /*Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),*/
})
module.exports= signInSchema;