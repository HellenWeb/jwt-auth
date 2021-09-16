 
// Modules

const nodemailer = require("nodemailer")

// Create class UserServise

class MainServise {

    constructor() {
        this.trasport = nodemailer.createTransport({
            host:
            port: 
            secure: false,
            auth: {
                user:
                pass: 
            }
        })
    }

    async sendActivationMain(to, link) {
        
    }
}

// Exporting for Modules

module.exports = new MainServise()