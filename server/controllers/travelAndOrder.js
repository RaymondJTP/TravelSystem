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

    static async orderTravelPackage(req,res,next){
        try {
            let OrderNumber = +req.body.OrderNumber
            const CustomerId = +req.user.id
            const qty = +req.body.qty
            const PackageId = +req.body.PackageId
            
            const packageTravel = await Package.findOne({
                where : {
                    PackageId
                }
            })

            const orderCustomer = await Order.findAll({
                where : {
                    CustomerId
                }
            })

            function compareOrder(a, b) {
                return b.OrderNumber - a.OrderNumber;
            }
            const numberOfOrder = orderCustomer.sort(compareOrder)[0].OrderNumber + 1

            if(!packageTravel){
                throw {name : 'notfound', message: `Package travel dengan id ${PackageId} tidak ada`}
            }

            const order = await Order.create({
                OrderNumber : numberOfOrder, CustomerId, TotalPrice : packageTravel.Price * qty
            })

            if(!order){
                throw {name : 'errorOrder'}
            }

            const orderDetail = await Detail.create({
                PackageId, OrderId : order.OrderId, qty
            })

            if(!orderDetail){
                throw {name : 'orderOrderDetail'}
            }

            const result = await Detail.findOne({
                where : {
                    DetaiId : orderDetail.DetaiId
                },
                include : [
                    {
                        model : Package
                    },
                    {
                        model : Order
                    }
                ]
            })

            res.status(201).json(result)
        } catch (err) {
            console.log(err);
        }
    }

    static async getOrderHistory(req,res,next){
        try {
            const CustomerId = +req.user.id
            console.log(CustomerId);
            const result = await Detail.findAll({
                include : [
                    {
                        model : Package
                    },
                    {
                        model : Order,
                        where : {
                            CustomerId
                        }
                    }
                ]
            })

            res.status(200).json(result)
        } catch (err) {
            console.log(err);
        }
    }


}

module.exports = Controller