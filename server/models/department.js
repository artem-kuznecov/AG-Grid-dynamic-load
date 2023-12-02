const { Sequelize, DataTypes } = require('sequelize'),
      sequelize = new Sequelize(process.env.DATABASE)

const Department = sequelize.define('Department',
    {
        id: {
            type: DataTypes.MEDIUMINT,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        foundation_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        about_text: {
            type: DataTypes.STRING(250)
        },
        address: {
            type: DataTypes.STRING(100)
        },
        director_id: {
            type: DataTypes.MEDIUMINT
        }
    },
    {
        tableName: 'departments',
        timestamps: false // если true, будут создаваться updatedAt и createdAt
    }
)

module.exports = Department