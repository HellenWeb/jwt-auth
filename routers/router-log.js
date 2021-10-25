
// Modules

const router = require("express").Router()
const request = require("../controllers/RequestLog")
const { check } = require("express-validator")

// Making Request

router.post('/register', [ check('email', 'Invalid Email').isEmail(), check('password', 'Wrong Password').isLength({ min: 6 }) ], request.requestRegistPage)
router.post('/login', [ check('email', 'Invalid Email').isEmail().normalizeEmail(), check('password', 'Wrong Password').exists() ], request.requestLoginPage)
router.post('/logout', request.requestLogoutPage)
router.get('/activate/:link')
router.get('/refresh', request.requestRefreshPage)
router.get('/test', request.requestTestPage)

// Exporting for Modules

module.exports = router