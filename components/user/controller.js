const store = require('./store');

function addUser(name) {
  if (!name) {
    // ? devolviendo promesa rechazada
    return Promise.reject('invalid name');
  }
  const user = {
    name,
  };

  // ? devolvemos la promesa del store segun lo que suceda en BD
  return store.add(user);
}

function getUserList() {
  return store.list();
}

module.exports = {
  addUser,
  getUserList,
};
