import Joi from "joi";

const editCardSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
  subtitle: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(3000).required(),
  phone: Joi.string()
    .pattern(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
    .required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(500)
    .required(),
  web: Joi.string().uri({ scheme: ["http", "https"] }),
  image: Joi.object()
    .keys({
      url: Joi.string().uri({ scheme: ["http", "https"] }),
      alt: Joi.string().min(2).max(256).allow(""),
    })
    .required()
});

const editCardSchemaValidation = (cardInput) => {
  return editCardSchema.validateAsync(cardInput);
};
export default editCardSchemaValidation;
