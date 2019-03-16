// index.js
require = require("esm")(module)
module.exports = require("./app/main.js")
module.exports.start()