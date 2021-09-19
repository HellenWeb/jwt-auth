 
// Modules

const User = require("../models/user-model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const uuid = require("uuid")
const mailService = require("./mail-servise")
const tokenServise = require("./token-servise")
const dto = require("../dtos/user-dto")
const UserDto = require("../dtos/user-dto")

// Create class UserServise

class UserServise {
    async registration(email, password) {
        const candidate = await User.findOne({ email })
        if (candidate) {
            throw new Error(`User with email ${email} already exists`)
        }
        let hashPassword = await bcrypt.hash(password, 3)
        let activationLink = uuid.v4()
        let user = await User.create({ email, password: hashPassword, activationLink })
        await mailService.sendActivationMain(email, `${process.env.API_URL}/api/activate/${activationLink}`)
        const userDto = new UserDto(user)
        const tokens = tokenServise.generateTokens({ ...userDto })
        await tokenServise.saveToken(userDto.id, tokens.refreshToken)
        return  { ...tokens, user: userDto}
    }
}

// Exporting for Modules

module.exports = new UserServise()