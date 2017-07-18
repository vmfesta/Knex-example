
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('milestones', function(table){
      table.bigInteger('famous_id').unsigned().index().references('id').inTable('famous_people')
    })
  ])
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('milestones')
};
