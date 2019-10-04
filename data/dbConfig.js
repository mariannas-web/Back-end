const knex = require('knex')

const dbConfig = require('../knexfile.js')

const dbEnv = process.env.DB_ENV || 'production'

module.exports = knex(dbConfig[dbEnv])