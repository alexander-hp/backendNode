// * conectando a mongoDB
// ! Instalar mongoos con: npm i mongoose
const db = require('mongoose');

// ? le decimos a mongoose que utilice estas promesas de node
db.Promise = global.Promise;

// ? la hacemos asincrona para que nos diga cuando ya se haya conectado
async function connect(url) {
  // * Conexion por url en mongo atlas
  await db.connect(url, { useNewUrlParser: true });
  console.log('[Db] conectada con exito!');
}

module.exports = connect;
