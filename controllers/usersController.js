const { usersModel } = require("../models/usersModel.js");

const message = "ocurrio un error en el backend al intentar";

const createUser = async (req, res) => {
  try {
    const { name, email, contact, user, password } = req.body;

    const newUser = await usersModel({ name, email, contact, user, password });

    newUser.save();

    res.sendStatus(200);
  } catch (error) {
    console.log(`${message} crear el usuario: ${error}`);
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, contact, user, password, _id } = req.body;

    await usersModel.updateOne(
      { _id },
      { $set: { name, email, contact, user, password } }
    );

    res.sendStatus(200);
  } catch (error) {
    console.log(`${message} actualizar el usuario`);
  }
};

module.exports = { createUser, updateUser };
