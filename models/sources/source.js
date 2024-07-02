const { Schema, model } = require("mongoose");
const { addSchema } = require("../../schemas/sources");
const sourceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    spend: {
      type: Number,
      required: true,
    },
    conversion: {
      type: Number,
      required: true,
    },
    session: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true, // Додає поля createdAt та updatedAt
  }
);
const schemas = {
  addSchema,
};
const Source = model("source", sourceSchema);

module.exports = {
  Source,
  schemas,
};
