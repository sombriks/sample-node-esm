const { Router } = require("express");
const { knex } = require("../config/database");

const router = new Router();
exports.router = router;

router.get("/list", (req, res) => {
  knex("order")
    .select()
    .then(ret => res.send(ret))
    .catch(err => res.status(500).send(err));
});

// TODO complete API
