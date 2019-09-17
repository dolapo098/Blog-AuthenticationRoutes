const Joi= require('@hapi/joi');

const postSchema = Joi.object().keys({
    title: Joi.string().required(),
    author: Joi.string().required(),
    body: Joi.string().required().max(500),
    date: Joi.string()
})

module.exports = postSchema;