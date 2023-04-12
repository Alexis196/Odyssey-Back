import Joi from 'joi-oid';

const schema = Joi.object({
    title: Joi
        .string()
        .required()
        .min(3)
        .max(30)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 30 characters",
            'string.required': 'the title is required',
        }),
    cover_photo: Joi
        .string()
        .uri()
        .required(),
    packages: Joi
        .string()
        .required()
        .min(20)
        .max(2000)
        .messages({
            "string.min": "The description must have at least 20 characters",
            "string.max": "The description must have a maximum of 200 characters",
            'string.required': 'the description is required',
        }),
    category_id: Joi
        .objectId()
        .required(),
    pages: Joi
        .string()
        .required()
        .uri()
        .messages({
            "pages": "field must be a valid URL, separated by commas."
        }),
    price: Joi
        .number()
        .required()
        .messages({
            "price": "field must be a valid number."
        }),
})

export default schema