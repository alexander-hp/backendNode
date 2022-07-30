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

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

// * Exportando las funciones
module.exports = {
  addMessage,
  getMessages,
};
