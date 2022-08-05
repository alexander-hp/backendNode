const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', (req, res) => {
  // * leyendo cabaceras o headers
  console.log('Headers: ', req.headers.auth);
  res.header({
    'custom-header': 'Nuestro Valor Personalizado',
  });

  // *Checamos si es que tiene un error o no la peticion
  if (req.query.error == 'ok') {
    response.error(
      req,
      res,
      'Error inesperado',
      400,
      'Es solo una simulacion de errores'
    );
  } else {
    // res.send('Respuesta desde tipo get');
    response.succes(req, res, 'lista de mensajes', 201);
  }
});

router.post('/', (req, res) => {
  // ? Como podemos responder al front-end, objeto de arreglo
  // ? con status 201
  res.status(201).send([{ error: '', body: 'Creado correctamente' }]);
});

router.delete('/', (req, res) => {
  console.log('Query: ', req.query);
  console.log('Body: ', req.body);
  res.send(req.body.text + ' eliminado exitosamente');
  // res.send('Respuesta desde tipo delete');
});

module.exports = router;
