const {Sequelize} = require('sequelize');

const db = new Sequelize(
    'database','username','password',{
        host:'localhost',
        dialect:'mysql'

})
db
  .authenticate()
  .then(() => {
    console.log("Connected to MySQL successfully");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = db;