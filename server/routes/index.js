const router = require('express').Router()

const authController = require('../controllers/authController')
const travel = require('../controllers/travelAndOrder')
const authentication = require('../middlewares/authentication')
// const routerHistory = require('./historyroute')
// const routerCustomer = require('./customer')

router.get('/package', travel.getPackage)
router.post('/register', authController.register)
router.post('/login', authController.login)
router.use(authentication)

router.post('/package', travel.postPackage)
router.post('/order', travel.orderTravelPackage)
router.get('/history', travel.getOrderHistory)
// router.use('/histories', routerHistory)
// router.use(errorHandler)


module.exports = router