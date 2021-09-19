 
// Modules

const nodemailer = require("nodemailer")

// Create class UserServise

class MainServise {

    constructor() {
        this.trasport = nodemailer.createTransport({
            host: '' + process.env.SMTP_HOST,
            port: '' + process.env.SMTP_PORT, 
            secure: false,
            auth: {
                user: '' + process.env.SMTP_USER,
                pass: '' + process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMain(to, link) {
        await this.trasport.sendMail({
            from: '' + process.env.SMTP_USER,
            to,
            subject: `Activation account ${'' + process.env.API_URL}`,
            text: '',
            html: 
                `
                    <div>
                        <h1>Activation</h1>
                        <a href='${link}'>${link}</a>
                    </div>
                `    
        })
    }
}

// Exporting for Modules

module.exports = new MainServise()