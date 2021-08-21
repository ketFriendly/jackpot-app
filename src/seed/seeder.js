const fs = require("fs");
const db = require("../db/sequelize");

module.exports = () => {
  let levelSeedData = fs.readFileSync(__dirname + "\\level.seed.json", {
    encoding: "utf-8",
  });
  levelSeedData = JSON.parse(levelSeedData);
  levelSeedData.forEach(async (level) => {
    await db.levels
      .create(level)
      // .then((result) => console.log(result))
      .catch((err) => console.error(err));
  });

  let clientSeedData = fs.readFileSync(__dirname + "\\client.seed.json", {
    encoding: "utf-8",
  });
  clientSeedData = JSON.parse(clientSeedData);
  clientSeedData.forEach(async (client) => {
    await db.clients
      .create(client)
      // .then((result) => console.log(result))
      .catch((err) => console.error(err));
  });
};
