"use strict";
/* -------------------------------------------------------
    EXPRESSJS 
------------------------------------------------------- */

const router = require('express').Router()

//cntrollers

const {blogCategory, blogPost} =require('../controllers/blog')

router.route('/category')
.post(blogCategory.create)

module.exports = router
