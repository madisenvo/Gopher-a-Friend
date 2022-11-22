// TODO: back end: add all other page data

const User = require('./User');
const GeoPost = require('./GeoPost');
const GeoComment = require('./GeoComment');
const TechPost = require('./TechPost');
const TechComment = require('./TechComment');
const ArtPost = require('./ArtPost');
const ArtComment = require('./ArtComment');

// geography 
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

// technology 
User.hasMany(TechPost, {
    foreignKey: 'user_id'
})

User.hasMany(TechComment, {
    foreignKey: 'user_id'
})

TechPost.belongsTo(User, {
    foreignKey: 'user_id'
})

TechPost.hasMany(TechComment, {
    foreignKey: 'geo_post_id'
})

TechComment.belongsTo(User, {
    foreignKey: 'user_id'
})

TechComment.belongsTo(TechPost, {
    foreignKey: 'tech_post_id'
})

// art 
User.hasMany(ArtPost, {
    foreignKey: 'user_id'
})

User.hasMany(ArtComment, {
    foreignKey: 'user_id'
})

ArtPost.belongsTo(User, {
    foreignKey: 'user_id'
})

ArtPost.hasMany(ArtComment, {
    foreignKey: 'geo_post_id'
})

ArtComment.belongsTo(User, {
    foreignKey: 'user_id'
})

ArtComment.belongsTo(ArtPost, {
    foreignKey: 'art_post_id'
})

module.exports = { User, GeoComment, GeoPost, TechComment, TechPost, ArtComment, ArtPost };
