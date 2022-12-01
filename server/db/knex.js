const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];

module.exports = require('knex')(knexConfig);