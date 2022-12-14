const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  // user: String,
  // ? ObjectId hace que se del tipo id que hace mongoDB
  // ? ref: user hace referencia al model de la carpeta user
  chat: {
    type: Schema.ObjectId,
    ref: 'Chat',
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
  file: String,
});

const model = mongoose.model('Message', mySchema);
module.exports = model;
