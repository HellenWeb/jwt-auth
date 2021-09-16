 
// Modules

const jwt = require("jsonwebtoken")
const tokenModel = require("../models/token-model")

// Create class UserServise

class TokenServise {
    generateTokens(payload) {
        let acsessToken = jwt.sign(payload, '' + process.env.JWT_SECRET_ACCSESS_TOKEN, {
            expiresIn: '1h'
        })
        let refreshToken = jwt.sign(payload, '' + process.env.JWT_SECRET_REFRESH_TOKEN, {
            expiresIn: '30d'
        })
        return { acsessToken, refreshToken }
    }
    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({ user: userId })
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = tokenModel.create({ user: userId, refreshToken })
        return token;
    }
}

// Exporting for Modules

module.exports = new TokenServise()