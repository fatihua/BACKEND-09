"use strict";
/* -------------------------------------------------------
    EXPRESSJS 
------------------------------------------------------- */

const router = require('express').Router()

//cntrollers

const {blogCategory, blogPost} =require('../controllers/blog')


//URL :/blog/categories
router.route('/category')
.get(blogCategory.list)
.post(blogCategory.create)

router.route('/category/:categoryId')
.get(blogCategory.read)
.put(blogCategory.update)
//.patch(blogCategory.update)
.delete(blogCategory.delete)



module.exports = router
