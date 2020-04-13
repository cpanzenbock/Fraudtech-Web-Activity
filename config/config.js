module.exports = {
  "development": {
    "username": "fraudtech-dbuser",
    "password": "Covid-19",
    "database": "fraudtech-db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": 5432,
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": 5432,
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "142.93.119.179",
    "dialect": "mysql",
    "port": 5432,
  }
}
