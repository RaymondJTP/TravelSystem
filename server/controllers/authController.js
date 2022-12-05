const {Customer} = require("../models")
const {comparePassword} = require("../middlewares/bcrypt")
const {signToken} = require("../middlewares/jwt")


class Controller {
    static async register(req,res,next){
        try {
            const {Name,Email,Phone,Address,Password} = req.body
            if(!Email || !Password){
                throw ({name : 'email/password' , message : 'Email cant be empty'})
            }

            if(! Password) {
                throw ({name : 'email/password', message : 'Password cant be empty'})
            }
            const TypeUser = +req.body.TypeUser
            
            const customer = await Customer.findOne({
                where : {
                    Email
                }
            })

            if(customer){
                throw ({name : 'invalid', message : 'Email is already existed, please login'})
            }

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
                throw ({name : 'Invalid'})
            }

            let isValidPassword = comparePassword(Password, customer.Password)

            if(!isValidPassword){
                throw ({name : 'Invalid'})
            }

            let tokenPayLoad = {id : customer.CustomerId, email : customer.Email}
            let access_token = signToken(tokenPayLoad)

            res.status(200).json({message : 'Success Login', access_token})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller