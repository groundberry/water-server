const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const csv = require('fast-csv');

function parseRow(row) {
  return Object.keys(row).reduce((memo, key) => {
    if (row[key]) {
      memo[key] = row[key];
    }
    return memo;
  }, {});
}

function readFile(file) {
  const rows = [];
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(file);
    const unzip = zlib.createGunzip();
    const parse = csv({headers: true, delimiter: '\t'});

    stream
      .pipe(unzip)
      .pipe(parse)
      .on('data', (row) => {
        rows.push(parseRow(row));
      })
      .on('end', () => {
        resolve(rows);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

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
