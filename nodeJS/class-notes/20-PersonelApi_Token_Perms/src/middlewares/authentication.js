"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
//Authentication COntrol Middleware

const Token  = require('../models/token')
module.exports = async(req, res,next)=>{

    req.user = null

    const auth = req.headers.authorization || null

    const tokenKey = auth ? auth.split(' '):null

    if(tokenkey && tokenKey[0]=='Token'){
        const tokenData = await Token.findOne({token:tokenKey[1]}).populate('userId')

        if(tokenData) req.user = tokenData.userId
    }

    console.log(tokenData);

    // console.log(req.headers);
    next()
}