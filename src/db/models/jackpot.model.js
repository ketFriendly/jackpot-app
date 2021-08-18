module.exports = (sequelize, Sequelize) => {
  const Jackpot = sequelize.define("jackpot", {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    actualAmount: {
      type: Sequelize.INTEGER,
    },
    displayedAmount: {
      type: Sequelize.INTEGER,
    },
  });

  return Jackpot;
};
