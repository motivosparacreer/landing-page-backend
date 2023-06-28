const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  //trim elimina los espacios en blanco de una cadena de texto

  name: {
    type: String,
    trim: false,
  },

  email: {
    type: Number,
    trim: true,
  },

  contact: {
    type: Number,
    trim: true,
  },

  user: {
    type: String,
    trim: false,
  },

  password: {
    type: String,
    trim: false,
  },
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = { usersModel };
