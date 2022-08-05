// ? process.env.DB_URL hace referencia a una variable de entorno

const config = {
  dbUrl:
    process.env.DB_URL ||
    'mongodb+srv://Alexander:Hezr781209*@cluster0.jzbqk.mongodb.net/?retryWrites=true&w=majority',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
};

module.exports = {
  config,
};
