const {Customer} = require('../models')

const authorization =  async (req,res,next) => {
    try {
        const id = +req.user.id
        const getCustomer = await Customer.findByPk(id)

        if(!getCustomer){
            throw({name: 'Not found', message: `Customer with id ${id} not found`})
        }

        if(getCustomer.TypeUser != 2){
            throw{name: 'You cant access'}
        }
        next()
    } catch (err) {
        res.json(err)
        // console.log(err);
        // next(err)
        
    }

}

module.exports = authorization
