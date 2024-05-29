import Joi from "joi";

const deleteUserSchema = Joi.object({
    userId: Joi.string().required(),
});

const deleteUserSchemaValidation = (userInput) => {
    return deleteUserSchema.validateAsync(userInput);
};

export default deleteUserSchemaValidation;