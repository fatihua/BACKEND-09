'use strict'
/*------------------*/

 /* NodeJs Server */
 require("dotenv").config()
 const PORT = process.env.PORT
 const HOST = process.env.HOST


 // http server : 
const http = require("node:http") // built-in module
/*---------------------------------*/

// http.createServer((request, response)=>{})

const app = http.createServer((request, response)=>{

    response.end('Hello World response end') // ekrana basılıyor
    console.log('Hello World from console'); // console'da görünüyor
})


// default server domain (localhost domain) = >  localhost:127.0.0.1
app.listen(PORT, ()=>console.log('Server running'))



// console.log("Hello World", PORT, HOST);