import { parseRow, readFile } from 'utils'

const path = require('path');
const csv = require('fast-csv');

exports.seed = (knex) => {
  return knex('zip_codes').del()
    .then(() => {
      const file = path.resolve(__dirname, '../../../data/UCMR3_ZipCodes.txt.gz');
      return readFile(file);
    })
    .then((rows) => {
      return knex('zip_codes').insert(rows);
    })
    .catch((err) => {
      console.error('Could not load CSV', err);
    });
};
