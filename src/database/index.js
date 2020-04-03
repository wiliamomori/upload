const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const File = require('../models/File');

const sequelize = new Sequelize(dbconfig);

File.init(sequelize);

module.exports = sequelize;