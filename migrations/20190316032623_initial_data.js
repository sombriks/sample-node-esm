const customers = [
  { id: 1, name: "Joe" },
  { id: 2, name: "Mary" },
  { id: 3, name: "Alice" },
  { id: 4, name: "Bob" },
  { id: 5, name: "Herald" },
  { id: 6, name: "Jane" }
];

const items = [
  { id: 1, name: "Hammer" },
  { id: 2, name: "Knife" },
  { id: 3, name: "Plasma Tv" },
  { id: 4, name: "Chair" },
  { id: 5, name: "Couch" },
  { id: 6, name: "Bed" },
  { id: 7, name: "Scissors" },
  { id: 8, name: "Wine Bottle" }
];

exports.up = (knex, Promise) =>
  Promise.all([knex("customer").insert(customers), knex("item").insert(items)]);

exports.down = (knex, Promise) =>
  Promise.all([knex("customer").del(), knex("item").del()]);
