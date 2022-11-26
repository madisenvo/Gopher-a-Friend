const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ArtPost extends Model {}

ArtPost.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    art_text: {
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
    modelName: 'ArtPost'
})

module.exports = ArtPost;