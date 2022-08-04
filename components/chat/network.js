const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

// ? creando un chat
router.post('/', function (req, res) {
  // ? le enviamos los usuarios que estaran en el chat
  controller
    .addChat(req.body.users)
    .then((data) => {
      response.succes(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Internal error', 500, e);
    });
});

// ? Obteniendo los chats
router.get('/', (req, res) => {
  controller
    .listChats()
    .then((userList) => {
      response.succes(req, res, userList, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected error', 500, e);
    });
});

module.exports = router;
