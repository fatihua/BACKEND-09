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
// app.listen(PORT, ()=>console.log(`Server is running at : http://${HOST}:${PORT}`))

/*-------------------*/

/***********************
http.createServer((req,res)=>{

    console.log(req.url);

    if(req.url == "/"){
        res.end('<h1>Home Page</h1>')
    } else if(req.url == "/about") {
        res.end("<h1>This is 'About' Page</h1>")
    }else{
        res.end("<h1>This is 'any' Page</h1>")
    }

}).listen(PORT, ()=>console.log(`Server is running at : http://${HOST}:${PORT}`))

**************************** */


http.createServer((req,res)=>{
   /* res.write('<h1>This is write - 1</h1>')
    res.write('<h1>This is write - 2</h1>')
    res.write('<h1>This is write - 3</h1>')
    res.write('<h1>This is write - 4</h1>')
    res.write('<h1>This is write - 5</h1>') */


    if(req.method=='GET'){
        //setHeader(single header method)
    res.setHeader('title', 'value')

    //res.writeHead(statuscode, statusMessage, {multi headers})
    res.writeHead(200,'custom error message', {
        'Content-encoding': 'utf-8',
        'multi-headers-exp':'test header value'
    })
    const obj = {
        result:true,
        message:'Hello World!'
    }


    res.write(JSON.stringify(obj))
    res.end()
    

    }else{
        res.writeHead(400)
        res.end('Wrong Method')
    }
   
}).listen(PORT, ()=>
    console.log(`Server is running at : http://${HOST}:${PORT}`))


// console.log("Hello World", PORT, HOST);