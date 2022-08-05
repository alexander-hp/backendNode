const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');

const socket = require('./socket');
const router = require('./network/routes');
const config = require('./config');
const db = require('./db');

// * haciendo la conexion a BD una sola vez
db(
  'mongodb+srv://Alexander:Hezr781209*@cluster0.jzbqk.mongodb.net/?retryWrites=true&w=majority'
);

// * habilitando que todos puedan hacer peticiones al backend
app.use(cors());

//* los tipos de body que podremos visualizar
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

// app.use(router);
router(app);

// app.use('/', function (req, res) {
//   res.send('hola');
// });

app.use('/app', express.static('public'));

server.listen(3000, function () {
  console.log(`aplicacion corriendo en: ${config.host} ${config.port}`);
});
