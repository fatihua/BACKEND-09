"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// const DB_PATH = process.env.DB_PATH || './db.sqlite3';
// const DB_NAME = process.env.DB_NAME || './db.sqlite3';

//sequalize

const {Sequelize, DataTypes}=require('sequelize')

//creating new instance
const sequelize = new Sequelize('sqlite:./db.sqlite3')

//* Creating Model */
// sequelize.define('todos', {attributes})

const Todo = sequelize.define('todos', {
    /*
    id:{ // this attribute automatically created
        type:DataTypes.INTEGER,
        allowNull:false, // default = True
        unique:true, // default = False
        comment:'this is a comment',
        primaryKey:true, // default = False
        autoIncrement:true, // default =  False
        field:'custom_name',
        defaultValue:0  //default = null

    } */

    title:{
        type:DataTypes.STRING,
        allowNull:false, // default = True
    },
    description:DataTypes.TEXT, // shorthand using
    priority:{//-1:low, 0:normal, 1 :high
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue:0
    },
    isDone:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false,
    }

    //No need to define createAt and updateAt. automatically created
})

//SYNC işlemi - bu kodun kullanımı : bu konu bir kere yazacağız, sonra yoruma alacağız.
// sequelize.sync()  // executing model 
// sequelize.sync({force:true})  /// eski dosyaları silerek ...
// sequelize.sync({alter:true})  //eski dosyaları silmeden



//connecting to DB
sequelize.authenticate()
.then(()=>console.log('* DB Connected *'))
.catch(()=>console.log('* DB Not Connected *'))

module.exports = Todo