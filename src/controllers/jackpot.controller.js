const jackpotService = require("../services/jackpot.service");

const registerClient = async (req, res) => {
  try {
    const data = await jackpotService.getRandomClient();
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Something went wrong!" });
  }
};

const spin = async (req, res) => {
  try {
    const bet = parseInt(req.body.bet)
    const data = await jackpotService.triggerSpin(
      req.body.client_server,
      bet
    );
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Something went wrong!" });
  }
};

const forceWin = async (req, res) => {
  try {
    const bet = parseInt(req.body.bet)
    const data = await jackpotService.forceWin(
      req.body.client_server,
      bet
    );
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Something went wrong!" });
  }
};

module.exports = {
  spin,
  registerClient,
  forceWin,
};
