
import Joi from "joi";

const patchIzBizSchema = Joi.object({
    isBusiness: Joi.boolean().required(),
});

const patchIsBizSchemaValidation = (userInput) => {
    return patchIzBizSchema.validateAsync(userInput);
};

export default patchIsBizSchemaValidation;
