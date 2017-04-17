const { resolve } = require('path')

module.exports = {
  test: {
    client: 'pg',
    connection: {
      database: 'ucmr_test',
      user:     'blanca',
      password: ''
    },
    migrations: {
      directory: resolve(__dirname, 'db/migrations')
    },
    seeds: {
      directory: resolve(__dirname, 'db/seeds/test')
    }
  },

  development: {
    client: 'pg',
    connection: {
      database: 'ucmr_development',
      user:     'blanca',
      password: ''
    },
    migrations: {
      directory: resolve(__dirname, 'db/migrations')
    },
    seeds: {
      directory: resolve(__dirname, 'db/seeds/development')
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'ucmr_production',
      user:     'blanca',
      password: ''
    },
    migrations: {
      directory: resolve(__dirname, 'db/migrations')
    },
    seeds: {
      directory: resolve(__dirname, 'db/seeds/production')
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
