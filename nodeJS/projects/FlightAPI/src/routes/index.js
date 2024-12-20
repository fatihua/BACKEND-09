"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */


// auth
router.use('/auth', require('./auth'))
// user:
router.use('/users', require('./user'))
//passenger
router.use('/passengers', require('./passenger'))

// documents:
router.use('/documents', require('./document'))

/* ------------------------------------------------------- */
module.exports = router