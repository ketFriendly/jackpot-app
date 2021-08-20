const express = require("express");
const axios = require("./axios");
const { bets } = require("../src/utils/constants");

const possibleBets = Object.keys(bets);
const indexOfRandomBet = getRandomNumberBetween(0, possibleBets.length);
const randomBet = possibleBets[indexOfRandomBet];

const app = express();

app.get("/", async (req, res) => {
  const { win } = req.query;
  try {
    const { data: client_server } = await axios.get("/");
    console.log(client_server);
    let postResponse = await axios.post(win ? "/force-win" : "/spin", {
      client_server,
      bet: randomBet,
    });
    console.log(postResponse);

    res.send(postResponse.data);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

app.listen(8081, () => console.log(`Listening on port ${8081}`));

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
