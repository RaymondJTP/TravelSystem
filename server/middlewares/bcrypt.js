const bcrypt = require('bcryptjs');

function hashPassword(password){
    let salt = bcrypt.genSaltSync(10)
    console.log(salt);
    return hash = bcrypt.hashSync(password, salt);
}

function comparePassword(password,passwordHashed){
    return bcrypt.compareSync(password,passwordHashed)
}

module.exports = {
    hashPassword,
    comparePassword
}