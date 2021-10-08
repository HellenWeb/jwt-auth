
// Modules

require("dotenv").config()
const chalk = require("chalk")
const express = require("express")
const path = require("path")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const routerLog = require('./routers/router-log')
const bodyParser = require("body-parser")
const Error = require("./middlewares/error")

// Default Variebles

const app = express()
const PORT = process.env.PORT || 5000

// Default Use and Set

app.set('views', path.resolve(__dirname, 'client'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(Error)
app.use('/api', routerLog)

// Default function => "start"

let r = new Promise((resolve, rejects) => {
    let start = async () => {
        try {
            await mongoose.connect(process.env.DB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            app.listen(PORT, () => console.log(chalk.yellow(`Server is working on PORT = ${PORT}`)))
        } catch (e) {
            console.error(e);
            process.exit(1)
        }
    }
    resolve(start)
})
    .then(data => {
        data()
    })
    .catch(err => {
        console.log(chalk.red(`Error: ${chalk.yellow(err)}`));
    })

// || \\    