const sequelize = require("./db")
const Sequelize = require("sequelize");
const Financail = require("./financial.model")

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Financail = Financail;

module.exports = db