"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
/*------------------------------------------------------- */


// mongoose 
const mongoose = require('mongoose');

// const SchemaName = new mongoose.Schema({ ...fields}, {...settings})
 
// Blog Post Schema

const BlogSchema = new mongoose.Schema({

    categoryId: { // Default relation is ManyToOne
        ref: "Category", // referncing it where this field comes.
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        // unique: true // Convert to OneToOne relation
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    title: {
        type: String,
        trim: true,
        required: true
    },

    content: {
        type: String,
        trim: true,
        // required: true
        required: [true, 'Content is required!']
    },
    image:{
        type: String,
        trim: true
    },

    isPublish: {
        type: Boolean,
        default: true
    },

    likes:{
        type: Number,
        default: 0
    },
    countOfVisitors:{
        type: Number,
        default: 0
    }

    // updatedAt
    // createdAt

}, {
    collection: 'blogs', // Table name
    timestamps: true // creates -> createdAt & updatedAt
})

module.exports = mongoose.model('Blog', BlogSchema)