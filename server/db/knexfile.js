require('dotenv').config({path: '../.env'});

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host     : process.env.DB_HOST,
      user     : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME,
      port     : process.env.DB_PORT,
    },
    migrations: {
      directory: __dirname + '/migrations'
    }
  }
};
