const express = require("express");
const routes = require("./routes");
const db = require("./src/db/sequelize");
const seed = require("./src/seed/seeder");
const fs = require('fs');
const {levels, getLevels} = require('./src/services/jackpot.service');


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

process.stdin.resume();

function exitHandler(options, exitCode) {
  const levels = getLevels()

   fs.writeFileSync('shutdown.txt', JSON.stringify(levels), 'utf8', (err) => {
    if (err != null) {
        console.error(err);
    }
  });  
    if (options.cleanup) console.log('clean');
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
}

process.on('exit', exitHandler.bind(null,{cleanup:true}));
process.on('SIGINT', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));