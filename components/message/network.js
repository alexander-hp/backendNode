const express = require('express');
const multer = require('multer');

const response = require('../../network/response');
const controller = require('../../components/message/controller');
const store = require('./store');

const router = express.Router();

// *Ruta donde guardaremos los archivos
const upload = multer({
  dest: 'public/files/',
});

router.get('/', (req, res) => {
  // ? variable donde asignamos el query tenga o no
  const filterMessage = req.query.user || null;
  console.log(filterMessage);
  // ? pasamos el query al controller "filterMessage"
  controller
    .getMessages(filterMessage)
    .then((messageList) => {
      response.succes(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected error', 500, e);
    });
});

router.post('/', upload.single('file'), (req, res) => {
  // * Propiedades del archivo
  console.log(req.file);
  /*
  ? Llammamos a la funcion addMessage de controller, le pasamos
  ? por parametros EL USER y Message que nos da el front-end
  ? y despues como nos devuelve una funcion entonces podemos
  ? acceder a then() si es que todo sale bien y catch() si hay error
    */
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message, req.file)
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

// ? patch "modificaciones parciales", :id "variable para que nos pasen el id"
router.patch('/:id', function (req, res) {
  // ? imprimimos el id que nos pasan en los parametros
  console.log(req.params.id);
  console.log(req.body.message);
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.succes(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Error interno', 500, e);
    });
});

// ? eliminando mensajes
router.delete('/:id', (req, res) => {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.succes(req, res, `Mensaje: ${req.params.id} eliminado`, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Error interno', 500, e);
    });
});

module.exports = router;
