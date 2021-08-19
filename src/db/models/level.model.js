module.exports = (sequelize, Sequelize) => {
  const Level = sequelize.define("level", {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING,
    },
    lowerBoundary: {
      type: Sequelize.INTEGER,
    },
    seed: {
      type: Sequelize.INTEGER,
    },
    actualAmount: {
      type: Sequelize.INTEGER,
    },
    displayedAmount: {
      type: Sequelize.INTEGER,
    },
  });
  return Level;
};


