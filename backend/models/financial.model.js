const {DataTypes} = require("sequelize");
const sequelize = require("./db");
const { type } = require("os");
const { describe } = require("node:test");

const Financail = sequelize.define("financial", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Financail.sync({force:true}).then(()=>{
    console.log("Tabal created or already exists");
}).catch((error)=>{
    console.log("Error creating Financial Table", error);
});

module.exports = Financail;