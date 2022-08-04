const store = require('./store');

// ? Añadimos el chat con los usuarios incluidos
function addChat(users) {
  // ? comprobamos si es que es un arreglo de usuarios y si trae data
  if (!users || !Array.isArray(users)) {
    return Promise.reject('invalid user list');
  }

  // ? hacemos un objeto donde estaran los usuarios
  const chat = {
    users: users,
  };

  // ? retornamos la info del chat
  return store.add(chat);
}

function listChats(userId) {
  // ? obtenemos todos los chats
  return store.list(userId);
}

module.exports = {
  addChat,
  listChats,
};
