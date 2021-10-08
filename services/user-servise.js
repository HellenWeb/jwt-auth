 
// Modules

const User = require("../models/user-model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const uuid = require("uuid")
const mailService = require("./mail-servise")
const tokenServise = require("./token-servise")
const dto = require("../dtos/user-dto")
const UserDto = require("../dtos/user-dto")
const ApiError = require("../exteptions/api-error")

// Create class UserServise

class UserServise {
    async registration(email, password) {
        const candidate = await User.findOne({ email })
        if (candidate) {
            throw ApiError.BadRequest(`User with email ${email} already exists`)
        }
        let hashPassword = await bcrypt.hash(password, 3)
        let activationLink = uuid.v4()
        let user = await User.create({ email, password: hashPassword, activationLink })
        const userDto = new UserDto(user)
        const tokens = tokenServise.generateTokens({ ...userDto })
        await tokenServise.saveToken(userDto.id, tokens.refreshToken)
        return  { ...tokens, user: userDto}
    }
    async login(email, password) {
        let user = await User.findOne({ email })
        if (!user) {
            throw ApiError.BadRequest('Invalid Email Address')
        }
        let isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            throw ApiError.BadRequest('Wrong Password')
        }
        let userDto = new UserDto(user)
        let tokens = tokenServise.generateTokens({ ...userDto }) 
        await tokenServise.saveToken(userDto.id, tokens.refreshToken)
        return  { ...tokens, user: userDto}
    }
    async logout(refreshToken) {
        let token = await tokenServise.removeToken(refreshToken)
        return token;
    }
    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
    }
}

// Exporting for Modules

module.exports = new UserServise()