const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./response');

var app = express();

//* los tipos de body que podremos visualizar
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// app.use('/', function (req, res) {
//   res.send('hola');
// });

router.get('/message', (req, res) => {
  // * leyendo cabaceras o headers
  // console.log('Headers: ', req.headers);
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

router.post('/message', (req, res) => {
  // ? Como podemos responder al front-end, objeto de arreglo
  // ? con status 201
  res.status(201).send([{ error: '', body: 'Creado correctamente' }]);
});

router.delete('/message', (req, res) => {
  console.log('Query: ', req.query);
  console.log('Body: ', req.body);
  res.send(req.body.text + ' eliminado exitosamente');
  // res.send('Respuesta desde tipo delete');
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('aplicacion correidno en el puerto 3000');
