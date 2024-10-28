"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require('express-async-error')

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Parse json data:
app.use(express.json())

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})

/*-----------------------------*/

//sequalize

const {Sequelize, DataTypes}=require('sequelize')

//creating new instance
const sequelize = new Sequelize('sqlite:./db.sqlite3')

//* Creating Model */
// sequelize.define('tableName', {fields})

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


/*------------------------------------*/

//Routes
const router = express.Router()


// Read Data
router.get('/todo', async(req, res) => {

    const result = await Todo.findAll()

res.status(200).send({
    error:false,
    result
    })
})

//Create Todo:
router.post('/todo', async(req,res)=>{

    // await Todo.create({
    //     title:'Title 1',
    //     description:'Description',
    //     priority:0,
    //     isDone:false
    // })

    const result = await Todo.create(req.body)

    res.send({
        error:false,
        result
    })
})

// Update Todo
router.put('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const [updated] = await Todo.update(req.body, {
        where: { id }
    });

    if (updated) {
        const updatedTodo = await Todo.findByPk(id);
        res.status(200).send({
            error: false,
            result: updatedTodo,
        });
    } else {
        res.status(404).send({
            error: true,
            message: 'Todo not found',
        });
    }
});

// Delete Todo
router.delete('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const deleted = await Todo.destroy({
        where: { id }
    });

    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).send({
            error: true,
            message: 'Todo not found',
        });
    }
});
app.use(router)











const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));