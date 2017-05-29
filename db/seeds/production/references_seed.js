const path = require('path');
const { readFile } = require('../utils');

exports.seed = (knex) => {
  return knex('references').del()
    .then(() => {
      const file = path.resolve(__dirname, '../../../data/UCMR3_References.txt.gz');
      return readFile(file);
    })
    .then((rows) => {
      return knex('references').insert(rows);
    })
    .catch((err) => {
      console.error('Could not load CSV', err);
    });
};
