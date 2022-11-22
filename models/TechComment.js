const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TechComment extends Model {}

TechComment.init({
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
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
            model: 'User',
            key: 'id'
        },
        onUpdate: 'cascade',
		onDelete: 'cascade'
    },
    tech_post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'TechPost',
            key: 'id'
        },
        onUpdate: 'cascade',
		onDelete: 'cascade'
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'TechComment'
})


module.exports = TechComment;