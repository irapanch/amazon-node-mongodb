const { Source } = require("../../models/sources/source");

const { RequestError } = require("../../helpers");

const updateById = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw RequestError(400, "missing fields");
  }
  const { id } = req.params;

  const result = await Source.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(201).json(result);
};

module.exports = updateById;
