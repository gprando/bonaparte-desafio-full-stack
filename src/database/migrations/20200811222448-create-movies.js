module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      tconst: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      titleType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      primaryTitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      originalTitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isAdult: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      startYear: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      endYear: {
        type: Sequelize.INTEGER,
      },
      runtimeMinutes: {
        type: Sequelize.INTEGER,
      },
      genres: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('movies');
  },
};
