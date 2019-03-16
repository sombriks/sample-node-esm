import { knex } from "./config/database";
import express from "express";
import { json } from "body-parser";
import morgan from "morgan";
import cors from "cors";

export const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(cors());

app.get("/status", req => req.res.send("ONLINE"));

import { router as customer } from "./routes/customer";
import { router as item } from "./routes/item";
import { router as order } from "./routes/order";

app.use("/customer", customer);
app.use("/item", item);
app.use("/order", order);

// istanbul ignore next
export const start = _ => {
  // istanbul ignore next
  console.log("updating migrations...");
  // istanbul ignore next
  knex.migrate.latest().then(_ => {
    console.log("done!");
    app.listen(3000, _ => {
      console.log("server online!");
    });
  });
};
