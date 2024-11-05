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

        const {categoryId} = req.params

        const result = await BlogCategory.findOne({_id:categoryId})

        // try {
        //     const category = await BlogCategory.findById(req.params.id);
        //     if (!category) {
        //         return res.status(404).send({ error: true, message: 'Category not found' });
        //     }
        //     res.status(200).send({ error: false, category });
        // } catch (err) {
        //     res.status(500).send({ error: true, message: 'Error fetching category' });
        // }

        res.status(200).send({
            error: false,
            result
        })
    },
    update: async (req, res) => {
        // const result = await BlogCategory.updateOne({...filter},{...data})
        const {modifiedCount} = await BlogCategory.updateOne({_id:req.params.categoryId},req.body)


        // try {
        //     const category = await BlogCategory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        //     if (!category) {
        //         return res.status(404).send({ error: true, message: 'Category not found' });
        //     }
        //     res.status(202).send({ error: false, category });
        // } catch (err) {
        //     res.status(500).send({ error: true, message: 'Error updating category' });
        // }

        res.status(modifiedCount?202:404).send({
            error: !!modifiedCount, //? boolean değerini alır çift ünlem olunca
            new : await BlogCategory.findById(categoryId)
        })

         /* ------------------------------------------------------- */

        //  const updatedData = await BlogCategory.findByIdAndUpdate(categoryId, req.body, {
        //     new: true, // return updated data 
        // })

        // res.status(202).send({
        //     error: false,
        //     updatedData
        // })


    
        },
    delete: async (req, res) => {

        const  {deletedCount} = await BlogCategory.deleteOne({_id:req.params.categoryId})

        // res.status(deletedCount ? 204 : 404).send({
        //     error: !deletedCount,

        // })

        if(deletedCount) res.sendStatus(204)
            else throw new Error('Something went wrong!')


        // try {
        //     const category = await BlogCategory.findByIdAndDelete(req.params.id);
        //     if (!category) {
        //         return res.status(404).send({ error: true, message: 'Category not found' });
        //     }
        //     res.status(200).send({ error: false, message: 'Category deleted successfully' });
        // } catch (err) {
        //     res.status(500).send({ error: true, message: 'Error deleting category' });
        // }
    }
};

module.exports.blogPost = {

    list: async (req, res) => {

        const result = await BlogPost.find()

        res.status(200).send({
            error: false,
            result
        })
    },

    create: async (req, res) => {

        const result = await BlogPost.create(req.body)

        res.status(201).send({
            error: false,
            result
        })
    },

    read: async (req, res) => {

        const result = await BlogPost.findById(req.params.postId)

        res.status(200).send({
            error: false,
            result
        })
    },

    update: async (req, res) => {

        const { postId } = req.params

        const updatedData = await BlogPost.findByIdAndUpdate(postId, req.body, { new: true })

        res.status(202).send({
            error: false,
            updatedData
        })
    },

    delete: async (req, res) => {

        const { deletedCount } = await BlogPost.deleteOne({ _id: req.params.postId })

        if (deletedCount) res.sendStatus(204)
        else throw new Error("Something went wrong!")

    }
}
