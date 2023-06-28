const { usersModel } = require("../models/usersModel.js");

const createUser = async (req, res) => {
  try {
    const { name, email, contact, user, password } = req.body;

    const newUser = await usersModel({ name, email, contact, user, password });

    newUser.save();

    res.sendStatus(200);
  } catch (error) {
    console.log(
      `ocurrio un error en el backend al intentar crear el usuario: ${error}`
    );
  }
};

module.exports = { createUser };
