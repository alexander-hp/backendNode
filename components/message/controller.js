// TODO se encargara de decir todo lo que sucede y las funciones necesarias

const store = require('./store');

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      reject('Los datos son incorrectos');
      return false;
    } else {
      const fullMessage = {
        user: user,
        message: message,
        date: new Date(),
      };
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
