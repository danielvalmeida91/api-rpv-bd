// // Update with your config settings.

// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   // staging: {
//   //   client: 'postgresql',
//   //   connection: {
//   //     database: 'my_db',
//   //     user:     'username',
//   //     password: 'password'
//   //   },
//   //   pool: {
//   //     min: 2,
//   //     max: 10
//   //   },
//   //   migrations: {
//   //     tableName: 'knex_migrations'
//   //   }
//   // },

//   // production: {
//   //   client: 'postgresql',
//   //   connection: {
//   //     database: 'my_db',
//   //     user:     'username',
//   //     password: 'password'
//   //   },
//   //   pool: {
//   //     min: 2,
//   //     max: 10
//   //   },
//   //   migrations: {
//   //     tableName: 'knex_migrations'
//   //   }
//   // }

// };

import knex from 'knex'
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
  }
}
