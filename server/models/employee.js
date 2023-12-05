const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE)

const Employee = sequelize.define('Employee',
    {
        id: {
            type: DataTypes.MEDIUMINT,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        firstname: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(1)
        }
    },
    {
        tableName: 'employees',
        timestamps: false
    }
)

module.exports = Employee