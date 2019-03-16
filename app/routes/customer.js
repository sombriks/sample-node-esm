const { Router } = require("express");
const { knex } = require("../config/database");

const router = new Router();
exports.router = router;

router.get("/list", (req, res) => {
  knex("customer")
    .select()
    .then(ret => res.send(ret))
    .catch(err => res.status(500).send(err));
});
