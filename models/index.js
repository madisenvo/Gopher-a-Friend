// TODO: back end: add all other page data

const User = require('./User');
const GeoPost = require('./GeoPost');
const TechPost = require('./TechPost');
const ArtPost = require('./ArtPost');


GeoPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})


TechPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})

ArtPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})

module.exports = { User, GeoPost, TechPost, ArtPost };
