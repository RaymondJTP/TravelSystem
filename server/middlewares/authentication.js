const {Customer} = require('../models')
const {verifyToken} = require('../middlewares/jwt')

const authentication = async(req,res,next) => {
    try {
        const{access_token} = req.headers

        if(!access_token){
            throw {name: 'Unauthorized'}
        }

        const tokenPayLoad = verifyToken(access_token)

        const getUser = await User.findOne({where:{email:tokenPayLoad.email}})
        
        if(!getUser){
            throw{name: 'Unauthorized'}
        }

        req.user = {
            id: getUser.CustomerId,
            email: getUser.Email,
            role: getUser.TypeUser
        }
        next()

    } catch (err) {
        console.log(err);
    }
}

module.exports = authentication