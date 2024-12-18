"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const user = require('../controllers/user')
// const permissions = require('../middlewares/permissions')

// URL: /users

router.route('/')
    // .get(permissions.isLogin, user.list)
    .get(user.list)
    .post(user.create)

router.route('/:id')
    // .get(permissions.isLogin, user.read)
    // .put(permissions.isLogin, user.update)
    // .patch(permissions.isLogin, user.update)
    // .delete(permissions.isAdmin, user.delete)
    .get(user.read)
    .put(user.update)
    .patch(user.update)
    .delete(user.delete)

/* ------------------------------------------------------- */
module.exports = router