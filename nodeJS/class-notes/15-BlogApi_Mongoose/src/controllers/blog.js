'use strict'

/*EXPRESSJS - Blog Project with Mongoose */

const {BlogCategory, BlogPost} = require('../models/blog')

module.exports.blogCategory = {
    list:async(req,res)=>{},
    create:async(req,res)=>{
        const result= await BlogCategory.create(req.body)

        res.status(201).send({
            error:false,
            result
        })
    },
    read:async(req,res)=>{},
    update:async(req,res)=>{},
    delete:async(req,res)=>{}
}
module.exports.blogPost = {}