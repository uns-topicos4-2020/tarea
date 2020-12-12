import * as Joi from "@hapi/joi"
export const AuthValidator = Joi.object({
    user: Joi.string().required(), 
    password: Joi.string().required(), 
})

