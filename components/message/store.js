// * Guardando los datos en local
// const list = [];
const Model = require('./model');

// ? añadiendo mensajes
function addMessage(message) {
  // * Local
  // list.push(message);
  // * Online
  const myMessage = new Model(message);
  myMessage.save();
}

// ? devolvemos los mensajes
async function getMessage(filterUser) {
  // * Local
  // return list;
  // * Online
  return new Promise((resolve, reject) => {
    // ? hacemos un objeto donde pondremos los filtros para las busquedas, si tiene
    let filter = {};
    if (filterUser !== null) {
      // ? agregamos al objeto y la variable que contiene el query
      // filter = { user: filterUser };
      // ? en este hacemos que no importe si el query esta en minusculas o may.
      filter = { user: new RegExp(`${filterUser}`, 'i') };
    }
    // ? aqui busca en mongodb ya con el filtro si es que tiene o no
    /* 
    ? populated hace que busquemos en la bd en este caso el id del usuario
    ? si es que esta y nos traiga la informacion del usuario, para funcionar
    ? tiene que llamarse a exec y ahi es donde devolvemos la info o rechazamos
    ? si es que tiene error    
    */
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
}

async function updateText(id, message) {
  // ?Primera implementacion buscando y actualizando al mismo tiempo
  const updateMessage = await Model.findByIdAndUpdate(
    { _id: id },
    { message: message },
    { new: true }
  );
  return updateMessage;
  // ? Segunda implementacion buscando y despues actualizando
  // const foundMessage = await Model.findOne({ _id: id });
  // foundMessage.message = message;
  // ? aqui es donde guardamos el mensaje y retornamos
  // const newMessage = await foundMessage.save();
  // return newMessage;
}

async function remove(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: remove,
  // get
  // update
  // delete
};
