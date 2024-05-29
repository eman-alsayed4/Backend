import Joi from "joi";

const objectIdSchema = Joi.object({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).hex().required(),
});

const objectIdSchemaValidation = (objectIdInput) => {
    return objectIdSchema.validateAsync({objectIdInput});
};

export default objectIdSchemaValidation;
