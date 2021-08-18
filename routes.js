const { spin } = require("./src/controllers/jackpot.controller");

module.exports = function (app) {
  app.route("/spin").post(spin);
};
