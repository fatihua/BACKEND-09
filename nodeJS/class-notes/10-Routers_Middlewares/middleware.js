'use strict'

/*
    EXPRESSJS MIDDLEWARE
*/
const express=require('express')
const app=express() 

require('dotenv').config()

const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'
/*
app.all('/',(req,res)=>{
    res.send({
        message:'Middleware'
    })
})*/
//app.get('/',(1. param requesrt, 2. param response, 3. parametre varsa next)=>{
// app.get('/',(x, y, z)=>{

// eğer 3 parametre varsa o bir middleware 
/*
app.get('/',(req,res,next)=>{
    console.log('middleware 1 çalıştı')
    next()
   
})
app.get('/',(req,res,next)=>{
    console.log('middleware 2 çalıştı')
    next()
   
})
app.get('/',(req,res)=>{
    res.send({
        message:'Middleware'
    })
})
*/
// eğer username query ile gönderildi ise next çalışsın
// gönderilmedi ise hata mesajı verilsin


/*
app.get('/',(req,res,next)=>{
    console.log('middleware 1 çalıştı')
    if(req.query.username=='clarusway')

        next()
    else{
        res.send({
            message:'username not exist'
        })
    }
   
})

app.get('/',(req,res)=>{
    res.send({
        message:'welcome clarusway '
    })
})

*/


/*
app.get('/',(req,res,next)=>{
    console.log('middleware 1 çalıştı')
    if(req.query.username=='clarusway')
        req.message='welcome'
    else{
        req.message='username not exist'
    }
    next()
   
})

app.get('/',(req,res)=>{
    res.send({
        message:req.message
    })
})
*/


//? mid'ler arası mesaj aktarımı
/*

app.get('/',(req,res,next)=>{
    req.message1='message from mid 1'
    next()
})
app.get('/',(req,res,next)=>{
    req.message2='message from mid 2'
    next()
})
app.get('/',(req,res,next)=>{
    req.message3='message from mid 3'
    next()
})
app.get('/',(req,res)=>{
    res.send({
        message1:req.message1,
        message2:req.message2,
        message3:req.message3
    })
})

*/

// app.get('/',(req,res,next)=>{
//     req.message3='message from mid 3'
//     next()
// })

const middlewarex= (req,res,next)=>{
    console.log('mid x');
    req.message1='message from mid x'
    next()
}
const middleware1= (req,res,next)=>{
    console.log('mid 1');
    req.message1='message from mid 1'
    next()
}
const middleware2= (req,res,next)=>{
    console.log('mid 2');
    req.message2='message from mid 2'
    res.send('test')
    // next()
}
app.get('/',middleware1,middlewarex,middleware2)// sıralama önemli

// app.get('/',(req,res)=>{
//     res.send({
//         message1:req.message1,
//         message2:req.message2,
//         message3:req.message3
//     })
// })






app.listen(PORT,()=> console.log(`Server running on http://${HOST}:${PORT}`))
