const { sign } = require('jsonwebtoken');
const { JWT_SECRET, TOKEN_EXPIRATION } = require('../config/index.config');

let generateToken = (user) => {
    return sign({user},  JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
}

module.exports = {
    generateToken
}
