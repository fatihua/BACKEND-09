'use strict'

/*EXPRESSJS - Blog Project with Mongoose */

const {BlogCategory, BlogPost} = require('../models/blog')

module.exports.blogCategory = {
    list:async(req,res)=>{
        const result  =await BlogCategory.find()

        res.status(200).send({
            error:false,
            result
        })
    },

    create:async(req,res)=>{
        const result= await BlogCategory.create(req.body)

        res.status(201).send({
            error:false,
            result
        })
    },
    read: async (req, res) => {
        try {
            const category = await BlogCategory.findById(req.params.id);
            if (!category) {
                return res.status(404).send({ error: true, message: 'Category not found' });
            }
            res.status(200).send({ error: false, category });
        } catch (err) {
            res.status(500).send({ error: true, message: 'Error fetching category' });
        }
    },
    update: async (req, res) => {
        try {
            const category = await BlogCategory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!category) {
                return res.status(404).send({ error: true, message: 'Category not found' });
            }
            res.status(200).send({ error: false, category });
        } catch (err) {
            res.status(500).send({ error: true, message: 'Error updating category' });
        }
    },
    delete: async (req, res) => {
        try {
            const category = await BlogCategory.findByIdAndDelete(req.params.id);
            if (!category) {
                return res.status(404).send({ error: true, message: 'Category not found' });
            }
            res.status(200).send({ error: false, message: 'Category deleted successfully' });
        } catch (err) {
            res.status(500).send({ error: true, message: 'Error deleting category' });
        }
    }
};
module.exports.blogPost = {}