const path = require('path');

require('dotenv').config({ path: path.resolve('.env') });

module.exports = [
  {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    options: { encrypt: false, enableArithAbort: false },
    requestTimeout: 30000,

    entities:
      process.env.NODE_ENV === 'development'
        ? ['./src/Database/Entity/*.ts']
        : ['./dist/src/Database/Entity/*.js'],
    migrations:
      process.env.NODE_ENV === 'development'
        ? ['./src/Database/migrations/*.ts']
        : ['./dist/src/Database/migrations/*.js'],
    cli: {
      migrationsDir: './src/Database/migrations',
    },
  }
];
