const {Customer} = require("../models")
const {comparePassword} = require("../middlewares/bcrypt")
const {signToken} = require("../middlewares/jwt")


class Controller {
    static async register(req,res,next){
        try {
            const {Name,Email,Phone,Address,Password} = req.body
            const TypeUser = +req.body.TypeUser
            console.log(req.body);
            const result = await Customer.create({
                Name,Email,Phone,Address,Password,TypeUser
            })

            res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async login(req,res,next){
        try {
            const {Email,Password} = req.body

            const customer = await Customer.findOne({
                where : {Email}
            })
            if(!customer){
                throw ({name : 'loginFail'})
            }

            let isValidPassword = comparePassword(Password, customer.Password)

            if(!isValidPassword){
                throw ({name : 'loginFail'})
            }

            let tokenPayLoad = {id : customer.CustomerId, email : customer.Email}
            let access_token = signToken(tokenPayLoad)

            res.status(200).json({message : 'Success Login', access_token})
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Controller