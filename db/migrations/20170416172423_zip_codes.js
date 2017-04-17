exports.up = function(knex, Promise) {
  return knex.schema.createTable('zip_codes', function(table) {
    table.string('PWSID').notNullable();
    table.string('ZIPCODE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('zip_codes');
};
