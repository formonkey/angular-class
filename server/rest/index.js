const posts = require('../data/posts');
const users = require('../data/users');
const profiles = require('../data/profiles');

module.exports = function() {
    return {
        users,
        profiles,
        posts,
        comments,
    }
};
