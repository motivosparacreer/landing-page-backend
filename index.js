const express = require("express");

const dotenv = require("dotenv");
const { connectionDb } = require("./config/connectiondb.js");

const { usersRouter } = require("./routes/usersRoutes.js");

const app = express();

const port = process.env.PORT || 4000;

dotenv.config();
connectionDb();

app.use(express.json());

app.use("/", usersRouter);

app.listen(port, () => {
  console.log(`servidor backend levantado en el puerto ${port}`);
});
