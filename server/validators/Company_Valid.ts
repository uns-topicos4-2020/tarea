import * as Joi from "@hapi/joi"
export const CreateValidator = Joi.object({
    company_id: Joi.string().required(), 
    user_id: Joi.string().required(), 
    name: Joi.string().lowercase().required(), 
    web: Joi.string().required(), 
    rubro: Joi.string().lowercase().required(), 
    admanager_order_id: Joi.string().allow("").optional("")
})
export const UpdateValidator = Joi.object({
    company_id: Joi.string().allow("").optional(""), 
    user_id: Joi.string().allow("").optional(""), 
    name: Joi.string().lowercase().required(), 
    web: Joi.string().required(), 
    rubro: Joi.string().lowercase().required(), 
    admanager_order_id: Joi.string().allow("").optional("")
})
export const DeleteIDValidator = Joi.object({
    company_id: Joi.string().required("Select the record to delete!"), 
})
export const UpdateIDValidator = Joi.object({
    company_id: Joi.string().required("Select the record to update!"), 
})