var config = {
  development: {
    database: {
      host: 'localhost',
      user: 'root',
      password: 'pass',
      database: 'tztech',
      multipleStatements: true,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  },
  production: {

  }
};
module.exports = config;
