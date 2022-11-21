const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class GeoComment extends Model {}

Comment.init({
    geo_comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    geo_comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    geo_post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'geoPost',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'geoComment'
})


module.exports = GeoComment;