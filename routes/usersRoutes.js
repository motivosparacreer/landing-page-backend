const express = require("express");
const { createUser, updateUser } = require("../controllers/usersController.js");

const usersRouter = express.Router();

usersRouter.post("/create-user", createUser);
usersRouter.post("/update-user", updateUser);

module.exports = { usersRouter };
