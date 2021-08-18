const express = require('express');
const routes = require('./routes');
const db = require('./src/db/sequelize');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8081;

routes(app);

db.sequelize
  .sync({ force: true })
  .then(() => console.log('Successful db connection'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.info("🤖 Jackpot server is running on", port);
});

