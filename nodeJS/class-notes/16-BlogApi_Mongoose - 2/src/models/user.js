"use strict";

const {Schema,model} = require('mongoose')
const UserSchema = new Schema({
    email:{
        type:String,
        trim:true,
        unique:true,
        required:[true, 'Email is required'],
        // validate:(email)=>{
        //     if(email.includes('@') && email.includes('.')){
        //        return true 
        //     }else{
        //         return false
            // }
            
        // },
        // validate:(email)=>(email.includes('@')&& email.includes('.'))
        validate:[(email)=>(email.includes('@')&& email.includes('.')), 'Email type is incorrect!']
    },
    userName:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true,
    },
    firstName:String,
    lastName:String
},{
    collection:'users',
    timestamps:true

})

module.exports = model('User', UserSchema)
