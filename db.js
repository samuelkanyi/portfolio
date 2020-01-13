const Sequelize = require('sequelize');
const {
  HOST,
  DATABASE,
  USER,
  PASS
} = require('./config')

// Option 1: Passing parameters separately
const sequelize = new Sequelize(DATABASE, USER, PASS, {
  host: HOST,
  dialect: 'mysql'
});

// check connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    require('./models');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;