"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
const emailValidation = require("../helpers/emailValidation");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const uniqueValidator = require("mongoose-unique-validator");
/* ------------------------------------------------------- */

const UserSchema = new mongoose.Schema({
   username:{
            type:String,
            trim:true,
            required:true,
            unique:true,
            // index:?? true
   },
   password:{
            type:String,
            trim:true,
            required:true,
            select:false,
            set: (password) => passwordEncrypt(password),
   },
   email:{
            type:String,
            trim:true,
            required:true,
            unique:true,
            validate: [
                (email) => emailValidation(email),
                "Email format is not valid",
              ],
            // index:true
   },
   firstName:{
            type:String,
            trim:true,
            required:true
   },
   lastName:{
            type:String,
            trim:true,
            required:true
   },
   isActive:{
            type:Boolean,
            default:true
   },
   isStaff:{
            type:Boolean,
            default:false
   },
   isAdmin:{
            type:Boolean,
            default:false
   },

}, {
    collection: "users",
    timestamps: true,
})

UserSchema.plugin(uniqueValidator, {
    message: "This {PATH} is exist",
  });

module.exports = {User : mongoose.model('User', UserSchema)}

