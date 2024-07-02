const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/sources");

const { ctrlWrapper } = require("../../helpers");
const schemas = require("../../schemas/sources");
const { validateBody } = require("../../middlewares");

router.get("/", ctrlWrapper(ctrl.getAll));
router.post("/add", validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));
module.exports = router;
router.get("/:id", ctrlWrapper(ctrl.getById));
router.put(
  "/update/:id",
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);
router.delete("/remove/:id", ctrlWrapper(ctrl.removeById));
