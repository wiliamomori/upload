const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const File = require('../models/File');

const sequelize = new Sequelize(dbConfig);

File.init(sequelize);

module.exports = sequelize;