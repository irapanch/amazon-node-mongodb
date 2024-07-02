const { Source } = require("../../models/sources/source");

const { RequestError } = require("../../helpers");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Source.findOne({ _id: id });

  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = getById;
