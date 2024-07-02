const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const { DB_HOST, PORT = 3030 } = process.env;
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect successful");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
