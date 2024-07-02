const { Source } = require("../../models/sources/source");

const add = async (req, res) => {
  const result = await Source.create(req.body);
  res.status(201).json(result);
};

module.exports = add;
