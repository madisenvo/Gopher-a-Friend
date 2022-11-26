const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GeoPost extends Model {}

GeoPost.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    geo_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id'
        },
        onUpdate: 'cascade',
		onDelete: 'cascade'
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'GeoPost'
})

module.exports = GeoPost;