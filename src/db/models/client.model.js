module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      moneyIn: {
        type: Sequelize.INTEGER,
      },
      moneyOut: {
        type: Sequelize.INTEGER,
      },
      probabilityForWin: {
        type: Sequelize.INTEGER,
      },
    });
    return Client;
  };
  