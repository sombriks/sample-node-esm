// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './sample-dev.db'
    }
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './sample-testing.db'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './sample-production.db'
    }
  }

};
