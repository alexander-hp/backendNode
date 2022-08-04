const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');
const db = require('./db');

var app = express();

// * haciendo la conexion a BD una sola vez
db(
  'mongodb+srv://Alexander:Hezr781209*@cluster0.jzbqk.mongodb.net/?retryWrites=true&w=majority'
);

//* los tipos de body que podremos visualizar
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);
router(app);

// app.use('/', function (req, res) {
//   res.send('hola');
// });

app.use('/app', express.static('public'));

app.listen(3000);
console.log('aplicacion corriendo en el puerto 3000');
