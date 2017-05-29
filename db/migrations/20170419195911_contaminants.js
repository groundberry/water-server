exports.up = function(knex, Promise) {
  return knex.schema.createTable('contaminants', function(table) {
    table.string('PWSID').notNullable();
    table.string('PWSName');
    table.string('Size');
    table.string('FacilityID');
    table.string('FacilityName');
    table.string('FacilityWaterType');
    table.string('SamplePointID');
    table.string('SamplePointName');
    table.string('SamplePointType');
    table.string('AssociatedFacilityID');
    table.string('AssociatedSamplePointID');
    table.date('CollectionDate');
    table.string('SampleID');
    table.string('Contaminant');
    table.decimal('MRL');
    table.string('MethodID');
    table.string('AnalyticalResultsSign');
    table.decimal('AnalyticalResultValue');
    table.string('SampleEventCode');
    table.string('MonitoringRequirement');
    table.string('Region');
    table.string('State');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contaminants');
};
