const express = require("express");
const {
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController.js");

const usersRouter = express.Router();

usersRouter.post("/create-user", createUser);
usersRouter.post("/update-user", updateUser);
usersRouter.post("/delete-user", deleteUser);

module.exports = { usersRouter };
