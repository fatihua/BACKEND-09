"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()

/* ------------------------------------------------------- */
// controllers
const blog  = require('../controllers/blog')

// URL : /categories/blog
router.route('/blogs')
    .get(blog.list)
    .post(blog.create)

router.route('/blog/:categoryId')
    .get(blog.read)
    .put(blog.update)
    .patch(blog.update)
    .delete(blog.delete)

module.exports = router