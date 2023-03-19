"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoUser = void 0;
const sequelize_1 = require("sequelize");
const mysql_1 = require("../instances/mysql");
exports.BancoUser = mysql_1.sequelize.define('BancoUser', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 18
    },
    password: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ender: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    tableName: 'usuarios',
    timestamps: false
});
