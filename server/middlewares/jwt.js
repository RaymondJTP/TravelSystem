const jwt = require('jsonwebtoken');


function signToken(tokenPayLoad){
    return jwt.sign(tokenPayLoad, "insignia");
}

function verifyToken(access_token){
    return jwt.verify(access_token, "insignia" );
}


module.exports = {
    signToken,
    verifyToken
}