/**
 * Created by iZel on 3/1/17.
 */
'use strict';

var config = require('../config/default');
var r = require('rethinkdb');
var moment = require('moment');
require('rethinkdb-init')(r);
var d = new Date();
var fDate = moment(d).format('MMMddYYYY');
var todayDB = "rti"+fDate;
// Create Tables
r.init(config['rethinkdb'], [
  {
    name: 'settings',
    primaryKey: 'id',
    indexes: ['db', 'current']
  },
  {
    name: 'users',
    primaryKey: 'sid',
    indexes: ['name', 'email', 'address', 'createdAt','phone','managers']
  }
])
  .then(function (conn) {
    r.conn = conn;
    r.conn.use(config['rethinkdb'].db);
//		r.table("sessions").delete().run(r.conn);
  });

module.exports = r;
