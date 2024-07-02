const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  spend: Joi.number().required(),
  conversion: Joi.number().required(),
  session: Joi.number().required(),
  color: Joi.string().required(),
});

module.exports = {
  addSchema,
};
