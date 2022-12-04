const router = require('express').Router()

const authController = require('../controllers/authController')
const travel = require('../controllers/travelAndOrder')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
// const routerHistory = require('./historyroute')
// const routerCustomer = require('./customer')

router.get('/package', travel.getPackage)
router.post('/register', authController.register)
router.post('/login', authController.login)
router.use(authentication)

router.post('/package', authorization, travel.postPackage)
router.post('/order', travel.orderTravelPackage)
router.get('/history', travel.getOrderHistory)

//Special case superuser
router.delete('/package/:id', authorization, travel.deletePackage)
router.patch('/package/:id', authorization, travel.updatePackage)

// router.use(errorHandler)


module.exports = router