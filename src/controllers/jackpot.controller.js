const jackpotService = require("../services/jackpot.service");

const spin = async (req, res) => {
  const data = await jackpotService.triggerSpin(req.body.client_server, req.body.bet);
  return res.json(data);
};

module.exports = {
  spin,
};
