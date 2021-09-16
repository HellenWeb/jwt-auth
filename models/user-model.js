
// Modules

const { Schema, model, Types } = require("mongoose")
const { ObjectId } = require("mongodb")

// Create User Model

let userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String }
})

// Exporting for Module

module.exports = model('User', userSchema)