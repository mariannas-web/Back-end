// Update with your config settings.
require('dotenv').config('/.env');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/mw.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds:{
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename:'./data/staging.sqlite3'
    },
    useDefaultAsTrue: true,
    migrations: {
      directory: './data/migrations',
    }
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env_DATABASE_URL,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
  }
};
