const Model = require('./model');

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

function listUsers() {
  // ? esto devuelve una promesa
  return Model.find();
}

module.exports = {
  add: addUser,
  list: listUsers,
};
