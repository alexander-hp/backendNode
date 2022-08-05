// TODO se encargara de decir todo lo que sucede y las funciones necesarias
const socket = require('../../socket').socket;
const store = require('./store');

function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      reject('Los datos son incorrectos');
      return false;
    } else {
      let fileUrl = '';
      if (file) {
        fileUrl = 'http://localhost:3000/app/files/' + file.filename;
      }
      const fullMessage = {
        chat: chat,
        user: user,
        message: message,
        date: new Date(),
        file: fileUrl,
      };

      store.add(fullMessage);
      socket.io.emit('message', fullMessage);
      console.log(fullMessage);
      resolve(fullMessage);
    }
  });
}

function getMessages(filterMessage) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterMessage));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      console.error('[messageController] No hay mensaje');
      reject('Los datos son incorrectos');
      return false;
    } else {
      const result = await store.updateText(id, message);
      resolve(result);
    }
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('id invalido');
      return false;
    }
    store
      .remove(id)
      .then(() => {
        resolve(store.remove(id));
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// * Exportando las funciones
module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
