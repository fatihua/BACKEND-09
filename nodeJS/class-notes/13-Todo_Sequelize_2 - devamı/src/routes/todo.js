
// CRUD Operations

// routes and controllees

const router = require("express").Router()
const Todo = require('../models/todo')

// List Todo 
router.get('/todo', async(req, res) => {

    const result = await Todo.findAll()

res.status(200).send({
    error:false,
    result
    })
})

//Read Todo
router.get('/todo/:id', async(req,res)=>{

    // const result= await Todo.findOne({
    //     where:{
    //         id:req.params.id
    //     }
    // })
    const result= await Todo.findByPk(req.params.id)

    res.status(200).send({
        error:false,
        result
    })
})


//update
router.put('/todo/:id', async(req,res)=>{


    // const result = await Todo.update({...newData},{...filter})
    const result = await Todo.update(req.body, {
        where:{id:req.params.id   
        }})

    const isUpdated = result[0]

    res.status(202).send({
        error:isUpdated ? false : true,
        message:isUpdated ? 'Updated':'Something went wrong',
        updatedData :isUpdated && await Todo.findByPk(req.params.id)
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

//Delete Todo

router.delete('/todo/:id', async(req,res)=>{


    const isDeleted = await Todo.destroy({
        where:{
            id:req.params.id
        }
    })


    if(isDeleted){
        res.sendStatus(204)
    }else{
        res.errorStatusCode= 404
        throw new Error('Can not deleted ! or Maybe already deleted')
        
    }

})

module.exports = router