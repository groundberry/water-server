const fs = require('fs');
const zlib = require('zlib');

export function parseRow(row) {
  return Object.keys(row).reduce((memo, key) => {
    if (row[key]) {
      memo[key] = row[key];
    }
    return memo;
  }, {});
}

export function readFile(file) {
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
