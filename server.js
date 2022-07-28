const express = require('express');
const router = express.Router();
var app = express();
// ? router
app.use(router);

app.use('/', function (req, res) {
  res.send('hola');
});

router.get('/message', (req, res) => {
  res.send('Respuesta desde tipo get');
});

router.post('/message', (req, res) => {
  res.send('Respuesta desde tipo post');
});

app.listen(3000);
console.log('aplicacion correidno en el puerto 3000');
