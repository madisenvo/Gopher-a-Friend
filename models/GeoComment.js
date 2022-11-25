const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GeoComment extends Model {}

GeoComment.init({
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
            model: 'User',
            key: 'id'
        },
        onUpdate: 'cascade',
		onDelete: 'cascade'
    },
    geo_post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'GeoPost',
            key: 'id'
        },
        onUpdate: 'cascade',
		onDelete: 'cascade'
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'GeoComment'
})


module.exports = GeoComment;