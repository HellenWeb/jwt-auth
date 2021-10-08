
// Modules

const UserServise = require("../services/user-servise")
const { validationResult } = require("express-validator")
const ApiError = require("../exteptions/api-error")

// Create class "RequestLog"

class RequestLog {
    async requestRegistPage(req, res, next) {
        try {
            const error = validationResult(req)
            if (!error.isEmpty()) {
                throw next(ApiError.BadRequest(`Error Validation: ${error.array()}`))
            }
            const { email, password } = req.body;
            const userData = await UserServise.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) { next(e) }     
    }
    async requestLoginPage(req, res, next) {
        try {
            let { email, password } = req.body
            let userDataLogin = await UserServise.login(email, password)
            res.cookie('refreshToken', userDataLogin.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnly: true})
            return res.json(userDataLogin)
        } catch (e) { next(e) }     
    }
    async requestLogoutPage(req, res, next) {
        try {

            let { refreshToken } = req.cookies;
            const token = await UserServise.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)

        } catch (e) { next(e) }     
    }
    async requestRefreshPage(req, res, next) {
        try {
            const refreshToken = req.cookies;
            let userDataLogin = await UserServise.login(refreshToken)
            res.cookie('refreshToken', userDataLogin.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnly: true})
            return res.json(userDataLogin)
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