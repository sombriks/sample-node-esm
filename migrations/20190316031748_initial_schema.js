exports.up = knex =>
  knex.schema
    .createTable("customer", tb => {
      tb.increments("id");
      tb.timestamp("creation")
        .notNullable()
        .defaultTo(knex.fn.now());
      tb.string("name").notNullable();
    })
    .createTable("item", tb => {
      tb.increments("id");
      tb.timestamp("creation")
        .notNullable()
        .defaultTo(knex.fn.now());
      tb.string("name").notNullable();
    })
    .createTable("order", tb => {
      tb.increments("id");
      tb.timestamp("creation")
        .notNullable()
        .defaultTo(knex.fn.now());
      tb.string("description").notNullable();
      tb.integer("customer_id")
        .notNullable()
        .references("customer.id")
        .onDelete("cascade");
      tb.integer("item_id")
        .notNullable()
        .references("item.id")
        .onDelete("cascade");
    });

exports.down = knex =>
  knex.schema
    .dropTable("order")
    .dropTable("item")
    .dropTable("customer");
