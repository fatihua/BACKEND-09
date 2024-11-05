'use strict'

/*EXPRESSJS - Blog Project with Mongoose */

//$ npm i mongoose 

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOURI || 'mongodb://localhost:27017/blogAPI')
.then(() => console.log(' * DB Connected...'))
.catch(() => console.error(' * DB NOT Connected......'))

module.exports = mongoose
