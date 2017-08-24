module.exports = {
  development: {
    client: 'pg',
    // FIXME: CHANGE THIS FOR EVERY APP
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/template', //eslint-disable-line
    migrations: {
      directory: `${__dirname}/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/database/seeds/development`,
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/geochat',
    migrations: {
      directory: `${__dirname}/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/database/seeds/production`,
    },
  },
};
