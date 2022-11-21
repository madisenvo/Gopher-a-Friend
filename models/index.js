// TODO: back end: add all other page data

const User = require('./User');
const GeoPost = require('./GeoPost');
const GeoComment = require('./GeoComment');

User.hasMany(GeoPost, {
    foreignKey: 'user_id'
})

User.hasMany(GeoComment, {
    foreignKey: 'user_id'
})

GeoPost.belongsTo(User, {
    foreignKey: 'user_id'
})

GeoPost.hasMany(GeoComment, {
    foreignKey: 'geo_post_id'
})

GeoComment.belongsTo(User, {
    foreignKey: 'user_id'
})

GeoComment.belongsTo(GeoPost, {
    foreignKey: 'geo_post_id'
})

module.exports = { User, GeoComment, GeoPost };
