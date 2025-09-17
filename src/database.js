export const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'User-12910',
    database: 'db_rpv_teste',
  },
});
