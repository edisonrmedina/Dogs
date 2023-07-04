const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Dog = sequelize.define('Dogs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lifespan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
