const {Customer, Detail, Order, Package} = require("../models")


class Controller{
    static async postPackage(req,res,next){
        try {
            const {Name, Description, Image} = req.body
            const Price = +req.body.Price

            const result = await Package.create({
                Name, Description, Image, Price
            })

            res.status(201).json(result)
        } catch (err) {
            console.log(err);
        }
    }

    static async getPackage(req,res,next){
        try {
            const result = await Package.findAll()

            res.status(200).json(result)
        } catch (err) {
            console.log(err);
        }
    }

    static orderTravelPackage(req,res,next){
        try {
            let OrderNumber = +req.body.OrderNumber
            const TotalPrice = +req.body.TotalPrice

            const CustomerId = req.user.id
            
            // const result = 
        } catch (err) {
            
        }
    }

    static getOrderHistory(req,res,next){
        try {
            
        } catch (err) {
            
        }
    }


}

module.exports = Controller