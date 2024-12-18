"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// passwordEncrypt(password:string):

const { pbkdf2Sync } = require('node:crypto')
//     keyCode = process.env.SECRET_KEY,
//     loopCount = 1000,
//     charCount = 32,
//     encType = 'sha512';

    const keyCode = process.env.SECRET_KEY
    const loopCount = Number(process.env.LOOP_COUNT) // in .env should be written --> 10000 not 10_000
    const charCount = Number(process.env.CHAR_COUNT) 
    const encType = process.env.ENC_TYPE

    
module.exports = function (password) {
    return pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}