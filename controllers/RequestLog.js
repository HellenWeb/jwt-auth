
// Modules

const UserServise = require("../services/user-servise")

// Create class "RequestLog"

class RequestLog {
    async requestRegistPage(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await UserServise.
            registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) { next(e) }     
    }
    async requestLoginPage(req, res, next) {
        try {

        } catch (e) { next(e) }     
    }
    async requestLogoutPage(req, res, next) {
        try {

        } catch (e) { next(e) }     
    }
    async requestRefreshPage(req, res, next) {
        try {

        } catch (e) { next(e) }     
    }
    async requestTestPage(req, res, next) {
        try {
            res.status(200).json({ page: 'Test Page' })
        } catch (e) { next(e) }     
    }
}

// Exporting for Modules

module.exports = new RequestLog()