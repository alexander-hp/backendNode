const express = require('express');
const response = require('../../network/response');
const controller = require('../../components/message/controller');
const store = require('./store');

const router = express.Router();

router.get('/', (req, res) => {
  controller
    .getMessages()
    .then((messageList) => {
      response.succes(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected error', 500, e);
    });
});

router.post('/', (req, res) => {
  /*
  ? Llammamos a la funcion addMessage de controller, le pasamos
  ? por parametros EL USER y Message que nos da el front-end
  ? y despues como nos devuelve una funcion entonces podemos
  ? acceder a then() si es que todo sale bien y catch() si hay error
    */
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      store.add(fullMessage);
      response.succes(req, res, fullMessage, 201);
    })
    .catch(() => {
      response.error(
        req,
        res,
        'Informacion invalida',
        400,
        'Error en el controller'
      );
    });
});

router.delete('/', (req, res) => {
  console.log('Query: ', req.query);
  console.log('Body: ', req.body);
  res.send(req.body.text + ' eliminado exitosamente');
  // res.send('Respuesta desde tipo delete');
});

module.exports = router;
