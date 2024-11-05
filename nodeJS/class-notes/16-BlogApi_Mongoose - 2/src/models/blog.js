"use strict";
/* -------------------------------------------------------
    EXPRESSJS 
------------------------------------------------------- */


// mongoose
const mongoose = require('mongoose');
// const { type } = require('os');

/*
// const SchemaName = new mongoose.Schema({...field}, {...settings})
const SchemaName = new mongoose.Schema({
    //id:number
    //_id:ObjectId

    fieldName:{
        type:Number,
        default:null,  // if value not send, it gets a default value.
        trim:true,
        unique:true,
        required:[true, 'This is a required fieldname'],
        index:true,  // to access data faster
        // enum: [1,2,3] // bu syntax da geçerli.
        // enum: ["1","2","3"] 
        enum: [["1","2","3"], 'This is an enum Error message'], // hata olduğunda mesaj yazdırmak için kullanılan syntax
        validate: [
            (data)=>{return true},
            'This is validate error message'
        ],
        
        get:(data)=> data, //auto runs, to get the data from db
        set:(data)=> data // auto olarak çalışır, auto runs, to save the data to db
        
        },
        fieldName:String // shorthand
}, {
    collection:'tableName',
    timestamps:true, // to get createdAt and updatedAt fields
})

*/

//Blog Category Schema

const BlogCategorySchema = new mongoose.Schema({
    //_id   // kendi oluşturuyor
    name:{
        type:String,
        trim:true,
        required:true
    }
},{
    collection:'BlogCategories', 
    timestamps:true
})

const BlogCategory = mongoose.model('BlogCategory', BlogCategorySchema)

//Blog POST Schema

const BlogPostSchema = new mongoose.Schema({
    categoryId:{ // default relation is ManyToOne
        ref:'BlogCategory',
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        // unique:true//convert to OneToOne relation
    },

    title:{
        type:String,
        trim:true,
        required:true
    },
    content:{
        type:String,
        trim:true,
        required:true
    }

    //updatedAt
    //createdAt
},{
    collection:'BlogPosts',
    timestamps:true
})

// const BlogPost = mongoose.model('BlogPost', BlogPostSchema) //? ikinci export örneği için buna gerek kalmıyor!!

// module.exports ={BlogCategory, BlogPost}

module.exports = {
    BlogCategory : mongoose.model('BlogCategory', BlogCategorySchema),
    BlogPost : mongoose.model('BlogPost', BlogPostSchema)

}
