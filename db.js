const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('portfolio', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// check connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize; 