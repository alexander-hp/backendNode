const Model = require('./model');

function addChat(chat) {
  const myChat = new Model(chat);
  return myChat.save();
}

function listChats(userId) {
  return new Promise((resolve, reject) => {
    let filter = {};
    // ? checamos si tiene algun filtro y si, entonces lo ponemos
    if (userId) {
      filter = {
        users: userId,
      };
    }

    // ? encontramos los chats tenga o no filtros
    Model.find(filter)
      // ? con populate nos retorara la info de esos usuarios
      .populate('users')
      .exec((err, populated) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(populated);
      });
  });
}

module.exports = {
  add: addChat,
  list: listChats,
};
