const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('mydatabase', 'user', 'user_password', {
//   host: 'localhost',
//   port: 3306,
//   dialect: 'mysql' // or 'postgres', 'sqlite', 'mariadb', 'mssql', 'db2', 'snowflake', 'oracle'
// });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DIALECT
});

// 驗證資料庫連接
const testConnection = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error(error);
    console.error('Unable to connect to the database:', error);
  }

  // sequelize.authenticate()
  //   .then(() => {
  //     console.log('Connection has been established successfully.');
  //   })
  //   .catch(err => {
  //     console.error('Unable to connect to the database:', err);
  //   });
}
  


module.exports = exports = {
  sequelize,
  testConnection,
};