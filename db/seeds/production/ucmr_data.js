import { parseRow, readFile } from '../utils'

const path = require('path');
const csv = require('fast-csv');

exports.seed = (knex) => {
  return knex('ucmr_data_seed').del()
    .then(() => {
      const file = path.resolve(__dirname, '../../../data/UCMR3_All.txt.gz');
      return readFile(file);
    })
    .then((rows) => {
      return knex('ucmr_data_seed').insert(rows);
    })
    .catch((err) => {
      console.error('Could not load CSV', err);
    });
};
