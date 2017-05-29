const path = require('path');
const { readFile } = require('../utils');

exports.seed = (knex) => {
  return knex('contaminants').del()
    .then(() => {
      const file = path.resolve(__dirname, '../../../data/UCMR3_All.txt.gz');
      return readFile(file);
    })
    .then((rows) => {
      return knex('contaminants').insert(rows);
    })
    .catch((err) => {
      console.error('Could not load CSV', err);
    });
};
