// Update with your config settings.
require('dotenv').config();

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
    connection: process.env_DATABASE_URL,
    pool: {
      min: 0,
      max: 15
    },
    migrations: {
      directory: './data/migrations',
    },
  }
};
