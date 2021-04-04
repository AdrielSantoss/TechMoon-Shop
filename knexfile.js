// Update with your config settings.

module.exports = {
    client: 'sqlite3',
    connection: {
      filename: './techmoon.db'
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
