const db = require("../db/sequelize");
const { probabilityForJackpot, bets } = require("../utils/constants");

let jackpotLevels = [];
let clients = [];

const getRandomClient = async () => {
  jackpotLevels = await db.levels.findAll();
  clients = await db.clients.findAll();
  return clients[0].uuid; //handle random clients
};

const triggerSpin = async (client_server, bet) => {
  const remainingBet = distributeTheBet(bet);
  const client = await addBetToClientPot(client_server, remainingBet);

  const canWinJackpot = jackpotLevels.map((level) => {
    return (
      level.seed >= level.lowerBoundary &&
      level.displayedAmount <= level.actualAmount &&
      probability(probabilityForJackpot)
    );
  });
  const hasWonJackpot = canWinJackpot.indexOf(true);
  const wonClient =
    probability(client.probabilityForWin / 100) && bets[bet] <= client.moneyIn; //set in db

  if (hasWonJackpot != -1) {
    const level = jackpotLevels[hasWonJackpot];
    jackpotWon(level);
    return `You won a jackpot of ${level.displayedAmount}€`;
  }
  if (wonClient) {
    const wonAmount = bets[bet];
    client.moneyOut += wonAmount;
    client.save();
    return `You won ${wonAmount}€`;
  }
  return "You lose";
};

const distributeTheBet = (bet) => {
  //divide the bet to number of levels
  const addToPot = (bet * 2) / 100;
  const remains = bet - 2 * addToPot; //add remains to client betPot
  jackpotLevels.forEach(async (level) => {
    //check if it edits the array
    level.seed += addToPot;
    level.actualAmount += addToPot;
    await level.save();
  });

  return remains;
};

const addBetToClientPot = async (client_id, bet) => {
  const client = await db.clients.findOne({ where: { uuid: client_id } });
  client.moneyIn += bet;
  client.save();
  return client;
};

const probability = (n) => {
  return !!n && Math.random() <= n;
};

const jackpotWon = (level) => {
  level.actualAmount = 0;
  level.displayedAmount = level.lowerBoundary * 15; //random number to set new jackpot
  level.seed = level.lowerBoundary - level.seed;
  level.save();
  /* jackpotLevels.forEach((value) => {
    if (value.uuid === level.uuid) {
      return level;
    }
    return value;
  }); */
};

module.exports = {
  triggerSpin,
  getRandomClient,
};
