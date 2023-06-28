const express = require("express");
const { createUser } = require("../controllers/usersController.js");

const usersRouter = express.Router();

usersRouter.post("/create-user", createUser);

module.exports = { usersRouter };
