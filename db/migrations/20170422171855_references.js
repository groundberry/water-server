exports.up = function(knex, Promise) {
  return knex.schema.createTable('references', function(table) {
    table.string('Contaminant').notNullable();
    table.string('MRL').notNullable();
    table.string('ReferenceConcentration1');
    table.string('ReferenceConcentration2');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('references');
};
