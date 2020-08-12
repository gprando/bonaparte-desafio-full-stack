import Sequelize from 'sequelize';

import Movie from '../app/models/Movie';
import Rating from '../app/models/Rating';

import databaseConfig from '../config/database';

const models = [Movie, Rating];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
