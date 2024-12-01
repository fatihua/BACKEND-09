"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ nodemon
*/

const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

// Cross-origin resource sharing (CORS): $ npm i cors
const cors = require('cors')
const defaultCorsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}
app.use(cors())

/* ------------------------------------------------------- */
// Middlewares:

// Parse JSON:
app.use(express.json())

// Logger:
app.use(require('./src/middlewares/logger'))

// Auhentication: (JWT & Simple Token)
app.use(require('./src/middlewares/authentication'))

// findSearchSortPage / res.getModelList:
app.use(require('./src/middlewares/queryHandler'))

/* ------------------------------------------------------- */
// E - MAIL:
// npm i nodemailer

// const nodemailer = require('nodemailer')

// Create Test Account:
// nodemailer.createTestAccount().then((data) => console.log(data))
/* {
    user: 'ecodvasy3yps6k76@ethereal.email',
    pass: 'SHkfrEhUxYUSRA99HV',
    smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
    imap: { host: 'imap.ethereal.email', port: 993, secure: true },
    pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
    web: 'https://ethereal.email',
    mxEnabled: false
} */

// // Connect to MailServer/SMTP:
// const transporter = nodemailer.createTransport({
//     // SMTP
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false,
//     auth: {
//         user: "ecodvasy3yps6k76@ethereal.email",
//         pass: "SHkfrEhUxYUSRA99HV"
//     }
// })
// // console.log(transporter);

// // SendMail:
// transporter.sendMail({
//     from: "ecodvasy3yps6k76@ethereal.email",
//     to: "example@gmail.com",
//     subject: "Hello!",
//     text: "Hello there, How are you ?",
//     html: '<p> <b> Hello There </b> <br> How are you ? </p>'
// }, function (error, success) {

//     success ? console.log('SUCCESS:', success) : console.log('ERROR:', error)

// })


//* GoogleMail (gmail)
//* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "alidrl26@gmail.com",
//         pass: 'vbyt klrm hehd xubl'
//     }
// })

//* YandexMail (yandex)
// const transporter = nodemailer.createTransport({
//     service: 'yandex',
//     auth: {
//         user: 'test@yandex.com',
//         pass: '11' // your email-password
//     }
// })

// transporter.sendMail({
//     from: "example@gmail.com",
//     to: "example@gmail.com",
//     subject: "Hello hocam!",
//     text: "Hello there, How are you, how is class going ?",
//     html: '<p> <b> Hello There </b> <br> How are you ? </p>'

// }, function (error, success) {
//     success ? console.log('SUCCESS:', success) : console.log('ERROR:', error)
// })

/* ------------------------------------------------------- */


// Routes:

// All Routes
app.use("/", require('./src/routes'))


// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PIZZA API',
        docs: {
            swagger: "/documents/swagger",
            redoc: "/documents/redoc",
            json: "/documents/json",
        },
    })
})

// StaticFile:
app.use('/images', express.static('./uploads'))


/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.