import Joi from "joi";

const createCardSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
  subtitle: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(4000).required(),
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
    .required(),
    images: Joi.array(),
    userName: Joi.string().min(2).max(256).required(),
});

const createCardSchemaValidation = (cardInput) => {
  return createCardSchema.validateAsync(cardInput);
};
export default createCardSchemaValidation;
