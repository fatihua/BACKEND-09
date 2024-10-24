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


/*
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
*/

/*
const middleware1=(req,res,next)=>{
    console.log('mid 1');
    next()
}
const middleware2=(req,res,next)=>{
    console.log('mid 2');
    // res.send('test')
    next()
}

app.get('/', (req,res,next)=>{
    next()// sırasıyla app.use'dakilere uğruyor next ile, hepsi bittiğinde hala next varsa kendi next'ine geri geliyor ve kendinden sonrakileri yürütüyor.
    res.send({
        message:'get'
    })
})

app.use(middleware1,middleware2)
//app.use(middleware1)
//app.use(middleware2)

*/

/*
app.get('/', [middleware1, middleware2])//sadece get için
app.use('/', [middleware1, middleware2])// app.all anlamında

*/
/*
const middlewares=require('./middlewares/') // array olarak alma
const {middleware1,middleware2,middleware3}=require('./middlewares/')//obj olarak alma


app.get('/',middleware1, middleware2,middleware3,(req,res)=> {
    res.send({
        message:'get'
    })
})
*/


const middlewares=require('./middlewares/')
// app.use(middlewares.middleware1)

app.get('/',middlewares.middleware1,middlewares.middleware2,middlewares.middleware3, (req,res)=> {
    res.send({
        message:'get'
    })
})








app.listen(PORT,()=> console.log(`Server running on http://${HOST}:${PORT}`))
