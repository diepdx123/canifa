import Joi from "joi";

export const productSchema = Joi.object({
  title: Joi.string().required().min(6).max(255).messages({
    "string.base": "title must be a string",
    "string.empty": "title cannot be empty",
    "string.min": "title must have at least 6 characters ",
    "string.max": "title must have at most 255 characters ",
  }),
  price: Joi.number().required().min(0).messages({
    "string.base": "title must be a number",
    "string.empty": "title cannot be empty",
    "string.min": "Price minimun valus is 0",
  }),
  desciption: Joi.string().messages({
    "string.base": "title must be a string",
  }),
});
