const { spin, registerClient, forceWin } = require("./src/controllers/jackpot.controller");


module.exports = function (app) {
  app.route("/spin").post(spin);
  app.route("/").get(registerClient);
  app.route("force-win").post(forceWin)
};
