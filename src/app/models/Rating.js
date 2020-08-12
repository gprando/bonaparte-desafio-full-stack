import Sequelize, { Model } from 'sequelize';

class Rating extends Model {
  static init(sequelize) {
    super.init(
      {
        averageRating: Sequelize.FLOAT,
        numVotes: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Movie, { foreignKey: 'tconstRef' });
  }
}
export default Rating;
