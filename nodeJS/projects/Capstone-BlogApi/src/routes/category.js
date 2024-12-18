"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/category:

const category = require('../controllers/category')
// const permissions = require('../middlewares/permissions')

// URL: /categories

router.route('/')
    // .get(permissions.isStaff, category.list)
    // .post(permissions.isAdmin, category.create)
    .get(category.list)
    .post(category.create)

router.route('/:id')
    // .get(permissions.isStaff, category.read)
    // .put(permissions.isAdmin, category.update)
    // .patch(permissions.isAdmin, category.update)
    // .delete(permissions.isAdmin, category.delete)
    .get(category.read)
    .put(category.update)
    .patch(category.update)
    .delete(category.delete)

/* ------------------------------------------------------- */
// Exports:
module.exports = router