import knex from 'knex';
import path from 'path';

// migrations - controlam as versões dos bancos de dados

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true, // Joga null nos campos sem valor
});

export default db;