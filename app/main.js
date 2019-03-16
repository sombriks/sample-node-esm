const { knex } = require("./config/database");
const express = require("express");
const { json } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(cors());

app.get("/status", req => req.res.send("ONLINE"));

app.use("/customer", require("./routes/customer").router);
app.use("/item", require("./routes/item").router);
app.use("/order", require("./routes/order").router);

exports.app = app;

// istanbul ignore next
exports.start = _ => {
  console.log("updating migrations...");
  knex.migrate.latest().then(_ => {
    console.log("done!");
    app.listen(3000, _ => {
      console.log("server online!");
    });
  });
};
