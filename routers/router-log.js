
// Modules

const router = require("express").Router()
const request = require("../controllers/RequestLog")

// Making Request

router.post('/registration', request.requestRegistPage)
router.post('/login', request.requestLoginPage)
router.post('/logout', request.requestLogoutPage)
router.get('/activate/:link')
router.get('/refresh', request.requestRefreshPage)
router.get('/test', request.requestTestPage)

// Exporting for Modules

module.exports = router