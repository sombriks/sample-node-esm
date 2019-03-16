// test/test-suite.js
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

const { app } = require("../app/main");
const { knex } = require("../app/config/database");

describe("sample test suite", _ => {
  const req = chai.request(app).keepOpen();

  before(done => {
    console.log("preparing test db...");
    knex.migrate.latest().then(_ => {
      console.log("done!");
      done()
    });
  });

  after(done => {
    console.log("closing request");
    req.close();
    console.log("cleaning up testing db...");
    knex.migrate.rollback().then(_ => {
      console.log("done!");
      done()
    });
  });

  it("should say hello", done => {
    console.log("Hello!");
    done();
  });

  it("should list customers", done => {
    req.get("/customer/list").end((err, ret) => {
      ret.body.should.be.an("array");
      done(err);
    });
  });

  it("should list items", done => {
    req.get("/item/list").end((err, ret) => {
      ret.body.should.be.an("array");
      done(err);
    });
  });

  it("should list orders", done => {
    req.get("/order/list").end((err, ret) => {
      ret.body.should.be.an("array");
      done(err);
    });
  });
});
