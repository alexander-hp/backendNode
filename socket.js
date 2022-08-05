const socketIO = require('socket.io');

// * referencia de que pasa con socket, cuando se conecten o tenga algun evento
const socket = {};

function connect(server) {
  socket.io = socketIO(server);
}

module.exports = {
  connect,
  socket,
};
