const { Source } = require("../../models/sources/source");
const getAll = async (req, res) => {
  const result = await Source.find({});
  res.status(200).json(result);
};

module.exports = getAll;
