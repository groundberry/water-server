exports.seed = (knex) => {
  return knex('zip_codes').del()
    .then(() => {
      return knex('zip_codes').insert([
        { PWSID: '010106001', ZIPCODE: '98121' },
        { PWSID: '010109005', ZIPCODE: '98122' },
      ]);
    });
};
