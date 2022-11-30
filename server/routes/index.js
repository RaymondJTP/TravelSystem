const router = require('express').Router()
// const routerProduct = require('./product')
const authController = require('../controllers/authController')
// const routerCategory = require('./category')
// const routerUser = require('./userRoute')
// const routerHistory = require('./historyroute')
// const routerCustomer = require('./customer')

router.use('/register', authController.register)
router.use('/login', authController.login)
// router.use(authentication)


// router.use('/categories', routerCategory)
// router.use('/products', routerProduct)
// router.use('/users', routerUser)
// router.use('/histories', routerHistory)
// router.use(errorHandler)


module.exports = router