import Sequelize, { Model } from 'sequelize';

class Stock extends Model {
  static init(sequelize) {
    super.init(
      {
        amount: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Stock;
