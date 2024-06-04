const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/database');

const Student = db.define(
  'Student',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
);

module.exports = Student;