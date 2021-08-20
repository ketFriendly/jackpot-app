const { spin, registerClient } = require("./src/controllers/jackpot.controller");

module.exports = function (app) {
  app.route("/spin").post(spin);
  app.route("/").get(registerClient);
};
