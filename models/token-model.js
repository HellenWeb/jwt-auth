
// Modules

const { Schema, model } = require("mongoose")

// Create User Model

let schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    refreshToken: { type: String, required: true },
})

// Exporting for Module

module.exports = model('Token', schema)