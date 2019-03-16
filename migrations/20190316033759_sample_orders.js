const orders = [
  { id: 1, description: "sample order #1", customer_id: 1, item_id: 1 },
  { id: 2, description: "sample order #2", customer_id: 1, item_id: 2 },
  { id: 3, description: "sample order #3", customer_id: 1, item_id: 3 },
  { id: 4, description: "sample order #4", customer_id: 2, item_id: 1 },
  { id: 5, description: "sample order #5", customer_id: 2, item_id: 4 },
  { id: 6, description: "sample order #6", customer_id: 3, item_id: 5 },
  { id: 7, description: "sample order #7", customer_id: 4, item_id: 6 },
  { id: 8, description: "sample order #8", customer_id: 4, item_id: 7 },
  { id: 9, description: "sample order #9", customer_id: 1, item_id: 1 }
];

exports.up = knex => knex("order").insert(orders);

exports.down = knex => knex("order").del();
