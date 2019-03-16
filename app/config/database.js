const cfg = require("../../knexfile");
const knex = require("knex")(cfg[process.env.NODE_ENV || "development"]);
exports.knex = knex;