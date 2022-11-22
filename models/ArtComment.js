const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ArtComment extends Model {}

ArtComment.init({
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    artCommentText: {
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
    artPostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ArtPost',
            key: 'id'
        },
        onUpdate: 'cascade',
		onDelete: 'cascade'
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'ArtComment'
})


module.exports = ArtComment;