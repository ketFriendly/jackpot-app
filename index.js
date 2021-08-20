const express = require("express");
const routes = require("./routes");
const db = require("./src/db/sequelize");
const seed = require("./src/seed/seeder");

require("dotenv").config();

const app = express();

app.use(express.json());
const port = process.env.PORT || 8080;

routes(app);

db.sequelize
  .sync({ force: true })
  .then(() => {
    seed();
    console.log("Successful db connection");
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.info("🤖 Jackpot server is running on", port);
});
