// TODO: back end: add all other page data

const User = require('./User');
const GeoPost = require('./GeoPost');
const GeoComment = require('./GeoComment');
const TechPost = require('./TechPost');
const TechComment = require('./TechComment');
const ArtPost = require('./ArtPost');
const ArtComment = require('./ArtComment');

// geography 
// User.hasMany(GeoPost, {
//     foreignKey: 'user_id',
//     onDelete: 'cascade'
// })

// User.hasMany(GeoComment, {
//     foreignKey: 'user_id',
//     onDelete: 'cascade'
// })

GeoPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})

GeoPost.hasMany(GeoComment, {
    foreignKey: 'geo_post_id',
    onDelete: 'cascade'
})

GeoComment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})

// GeoComment.belongsTo(GeoPost, {
//     foreignKey: 'geo_post_id',
//     onDelete: 'cascade'
// })

// // technology 
// User.hasMany(TechPost, {
//     foreignKey: 'user_id',
//     onDelete: 'cascade'
// })

// User.hasMany(TechComment, {
//     foreignKey: 'user_id',
//     onDelete: 'cascade'
// })

TechPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})

TechPost.hasMany(TechComment, {
    foreignKey: 'geo_post_id',
    onDelete: 'cascade'
})

TechComment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})

// TechComment.belongsTo(TechPost, {
//     foreignKey: 'tech_post_id',
//     onDelete: 'cascade'
// })

// art 
// User.hasMany(ArtPost, {
//     foreignKey: 'user_id',
//     onDelete: 'cascade'
// })

// User.hasMany(ArtComment, {
//     foreignKey: 'user_id',
//     onDelete: 'cascade'
// })

ArtPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})

ArtPost.hasMany(ArtComment, {
    foreignKey: 'geo_post_id',
    onDelete: 'cascade'
})

ArtComment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})

// ArtComment.belongsTo(ArtPost, {
//     foreignKey: 'art_post_id',
//     onDelete: 'cascade'
// })

module.exports = { User, GeoComment, GeoPost, TechComment, TechPost, ArtComment, ArtPost };
