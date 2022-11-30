const {Customer} = require("../models")

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
            
        } catch (err) {
            
        }
    }
}

module.exports = Controller