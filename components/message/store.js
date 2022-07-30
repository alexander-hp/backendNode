const list = [];

// ? añadiendo mensajes
function addMessage(message) {
  list.push(message);
}

// ? devolvemos los mensajes
function getMessage() {
  return list;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  // get
  // update
  // delete
};
