'use strict'



/*
    EXPRESS.JS ROUTER
*/
const router=require('express').Router() // router sadece rourting amaçlı bir app



require('dotenv').config()

const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'

// app.use(router) // burada kullanmaya gerek yok, router.js'de var orada lazım

// router.get('/',(req,res)=>{ res.send ({ message:'GET' })})
// router.get('/user',(req,res)=>{ res.send ({ message:'GET for user path' })})
// router.post('/',(req,res)=>{ res.send ({ message:'POST' })})

//? router.route()

router.route('/')
.get((req,res)=>{ res.send ({ message:'GET' })})
.post((req,res)=>{ res.send ({ message:'POST' })})
.put((req,res)=>{ res.send ({ message:'PUT' })})
.delete((req,res)=>{ res.send ({ message:'DELETE' })})

router.get('/user',(req,res)=>{ res.send ({ message:'GET for user path' })} )

module.exports = router



