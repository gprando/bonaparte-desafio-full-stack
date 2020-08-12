import Sequelize, { Model } from 'sequelize';

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        tconst: Sequelize.STRING,
        titleType: Sequelize.STRING,
        primaryTitle: Sequelize.STRING,
        originalTitle: Sequelize.STRING,
        isAdult: Sequelize.INTEGER,
        startYear: Sequelize.INTEGER,
        endYear: Sequelize.INTEGER,
        runtimeMinutes: Sequelize.INTEGER,
        genres: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasOne(models.Rating, { foreignKey: 'tconstRef' });
  }
}
export default Movie;
