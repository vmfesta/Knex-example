const settings = require("./settings"); // settings.json
const con = {
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
}

var pg = require('knex')({
  client: 'pg',
  connection: con,
  searchPath: 'knex,public'
});

module.exports ={
    pg
};