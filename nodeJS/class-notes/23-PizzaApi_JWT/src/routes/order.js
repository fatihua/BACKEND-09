"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const { list, create, read, update, deleteOrder } = require('../controllers/order')

// URL: /orders


router.route('/').get(list).post(create)

router.route('/:id').get(read).put(update).patch(update).delete(deleteOrder)
/* ------------------------------------------------------- */
module.exports = router