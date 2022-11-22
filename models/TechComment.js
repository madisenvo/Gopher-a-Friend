const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TechComment extends Model {}

TechComment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tech_comment_text: {
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
    tech_post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'techPost',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'techComment'
})


module.exports = TechComment;