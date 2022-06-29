const { connect, connection } = require("mongoose");

connect("mongodb://localhost/Social-Network", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
