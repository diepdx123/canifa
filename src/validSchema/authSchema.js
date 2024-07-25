import Joi from "joi";

export const authSchema = Joi.object({
  email: Joi.string().required().email().messages({
    "string.base": "title must be a string",
    "string.empty": "title cannot be empty",
    "string.email": "email must be a vailid email",
  }),

  password: Joi.string().required().min(6).max(255).messages({
    "string.base": "title must be a string",
    "string.empty": "title cannot be empty",
    "string.email": "email must be a vailid email",
  }),
});
