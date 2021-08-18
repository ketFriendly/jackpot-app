const jackpotService = require("../services/jackpot.service");

const spin = async (req, res) => {
  const data = await jackpotService.triggerSpin();
  return res.json(data);
};

module.exports = {
  spin,
};
