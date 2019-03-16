import { Router } from "express";
import { knex } from "../config/database";

export const router = new Router();

router.get("/list", (req, res) => {
  knex("customer")
    .select()
    .then(ret => res.send(ret))
    .catch(err => res.status(500).send(err));
});

// TODO complete API