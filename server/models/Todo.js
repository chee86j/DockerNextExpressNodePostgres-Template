const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User'); // Import the User model

const Todo = sequelize.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
});

// Define associations
Todo.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Todo, { foreignKey: 'userId' });

module.exports = Todo;