module.exports = (sequelize, Sequelize) => {
  const Level = sequelize.define("level", {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
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
  });

  Level.associate = (models) => {
    Level.belongsTo(models.jackpots, {
      foreignKey: "UUID",
    });
  };
  return Level;
};
