'use strict'
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const { Blog } = require('../models/blog')


/* ------------------------------------------------------- */
// blog controllers
module.exports = {

    list: async (req, res) => {

        const result = await Blog.find()

        res.status(200).send({
            error: false,
            result
        })
    },

    create: async (req, res) => {


        const result = await Blog.create(req.body)

        res.status(201).send({
            error: false,
            result
        })
    },

    read: async (req, res) => {


        const result = await Blog.findOne({ _id: req.params.categoryId })

        res.status(200).send({
            error: false,
            result
        })
    },

    update: async (req, res) => {

        /* !!modifiedCount, get the boolean value of the data, short of -> Boolean(modifiedCount) */
        const { categoryId } = req.params

        

        const updatedData = await Blog.findByIdAndUpdate(categoryId, req.body, {
            new: true, // return updated data 
        })

        res.status(202).send({
            error: false,
            updatedData
        })


    },

    delete: async (req, res) => {

        const { deletedCount } = await Blog.deleteOne({ _id: req.params.categoryId }) // deletecCount return 1 if it is success otherwide return 0


        // res.status(deletedCount ? 204 : 404).send({
        //     error: !deletedCount,
        // })

        if (deletedCount) res.sendStatus(204)
        else throw new Error("Something went wrong!")

    }
}