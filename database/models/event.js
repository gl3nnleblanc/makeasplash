'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(models.User, {
        foreignKey: "userId",
        as: "host",
        onDelete: "CASCADE",
      });
    }
  };
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    createDate: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
