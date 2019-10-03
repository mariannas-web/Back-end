const knex = require('knex')
const secrets = require('../config/secrets')
const environment = secrets.environment || development
const config = require('../knexfile.js')[environment]

const dbConfig = require('../knexfile.js')
const dbEnv = process.env.DB_ENV || 'production'

module.exports = knex(config)