 
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
<<<<<<< HEAD
            subject: `Activation account ${'' + process.env.API_URL}`,
=======
            subject: `Активация аккаунта на ${'' + process.env.API_URL}`,
>>>>>>> 63523a9065d7d2cc34c0028921693d5ce030f02b
            text: '',
            html: 
                `
                    <div>
<<<<<<< HEAD
                        <h1>Activation</h1>
=======
                        <h1>Для активации перейдите по ссылке</h1>
>>>>>>> 63523a9065d7d2cc34c0028921693d5ce030f02b
                        <a href='${link}'>${link}</a>
                    </div>
                `    
        })
    }
}

// Exporting for Modules

module.exports = new MainServise()