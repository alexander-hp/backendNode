const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');

var app = express();

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
console.log('aplicacion correidno en el puerto 3000');
