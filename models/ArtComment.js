const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ArtComment extends Model {}

ArtComment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    art_comment_text: {
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
    art_post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'artPost',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'artComment'
})


module.exports = ArtComment;