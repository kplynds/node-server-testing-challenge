// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    migrations: "./data/migrations",
    seeds: "./data/seeds",
    connection: {
      filename: "./data/db3",
    },
  },

  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    migrations: "./data/migrations",
    seeds: "./data/seeds",
    connection: {
      filename: "./data/db3",
    },
  },
};
