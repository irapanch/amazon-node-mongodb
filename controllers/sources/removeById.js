const { Source } = require("../../models/sources/source");

const { RequestError } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Source.findByIdAndDelete(id);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(204).end;
};

module.exports = removeById;
