"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const {list, deleteUser, read, create, update} = require('../controllers/user')

// / user

router.route('/')
.get(list)
.post(create)

router.route('/:id')
.get(read)
.put(update)
.patch(update)
.delete(deleteUser)
/* ------------------------------------------------------- */
module.exports = router