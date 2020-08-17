const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/index.config');

let validateToken = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        const error = new Error();
        error.status = 400,
        error.message = "Token not found";
        throw error; 
    }

    jwt.verify(token, {JWT_SECRET}, (err, decodedToken) =>{
        if(err){
            const error = new Error();
            error.status = 401;
            error.message = "Invalid token";
            throw error;
        }

        req.user = decodedToken.user; 
        next();
    });

}

module.exports = {
    validateToken
}