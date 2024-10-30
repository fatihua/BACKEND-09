"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// Routes and Controllers

// const express = require("express") // zaten alt kısımdaki syntax ile bu işlemi yaptık
const router = require("express").Router()
// const Todo = require('../models/todo') // importuna gerek kalmadığı için kapattık
const {list, create, read, update, delete:deleteTodo} = require('../controllers/todo')


/* 
// List Todo:
router.get('/todo', list)

//CRUD Operations

// Create Todo:
router.post('/todo', create)

//Read Todo
router.get('/todo/:id', read)

//Update Todo
router.put('/todo/:id', update )

//Delete Todo
router.delete('/todo/:id', deleteTodo)
*/

router.route('/todo')
    .get(list)
    .post(create)

router.route('/todo/:id')
    .get(read)
    .put(update)    
    .delete(deleteTodo)


module.exports = router