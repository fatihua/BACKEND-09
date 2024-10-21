'use strict'

/*
    Express.js
*/

/*
npm init -v
npm i express dotenv

*/

//? Express server start

const express = require("express")
const app=express() // express üzerinde server çalıştır

//dotenv
// const x = require('dotenv'
  //  x.conig() //

  require('dotenv').config()
//   console.log(process.env);


const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

//req and res short form request and response
// app.get('/', (req, res)=>{
    //1
    //res.write('hello')
    //res.write('clarusway')
   // res.end()

   //2
    // res.write(JSON.stringify({
    //     message:'clarusway'   // objeyi ekrana basamaz
    // }))
    // res.end()

    //3
    // res.send({ // obje dönüşümünü yapar
    //     message:'clarusway'   // objeyi ekrana basamaz
    // })
    // res.send('hello clarusway')
// })

// app.get('/', (req,res)=>{res.send('method GET')})
// app.post('/', (req,res)=>{res.send('method POST')})
// // app.put('/', (req,res)=>{res.send('method PUT')}) // put=patch
// app.patch('/', (req,res)=>{res.send('method PATCH')}) // put=patch
// app.delete('/', (req,res)=>{res.send('method DELETE')})

// app.all('/', (req,res)=>{res.send('method ALL')}) // tavisye edilmez
// app.get('/abc', (req,res)=>{res.send('method GET')})
// app.get('/abc(x?)123', (req,res)=>{res.send('method GET')})  // arada x olabilir/olmayabilir
// app.get('/abc(x+)123', (req,res)=>{res.send('method GET')})  // n adet x olabilir
// app.get('/abc(*)123', (req,res)=>{res.send('method GET')})      // arada ne olursa olsun


// https://regexr.com
// regex"te en son kisma(url"deki) slash ekleme

// regexde pathe / ilave etme
// app.get(/abc/,(req,res)=>{ res.send( ' method GET') }) // tek tırnaklar yok , iki / arasında
// app.get(/abc/,(req,res)=>{ res.send( ' method GET') }) // abc içerirse
// app.get(/abc$/,(req,res)=>{ res.send( ' method GET') }) // abc onune ne gelirse gelsin ama en az bir karakter olsun
// app.get(/^\/abc/,(req,res)=>{ res.send( ' method GET') }) //  sonuna ne gelirse gelsin


// URL parametre
app.get('/user/:userId/:name', (req,res)=>{
    res.send({
        url:{
            protocol:req.protocol,
            secure:req.secure,
            hostname:req.hostname,
            subdomain:req.subdomains,
            url:req.url,
            params:req.params,
            method:req.method,
            originalUrl:req.originalUrl,// hangi router'da isek onu verir, ileriki konularda bakılacak

            query:req.query
            },
            id:req.params.userId
        })
})

// parametreler için regex kullanabiliriz
//      /user/:userId([0-9])/:name  = userId sadece rakamlardan oluşsun

//? STATUS CODES
//default status code 200'dür.
/*
app.get('/', (req,res)=>{
    res.status(200).send({message:"hello"})
})
*/

/*
app.get('/', (req,res)=>{res.status(200).send({message:"ok"})})
app.post('/', (req,res)=>{res.status(201).send({message:"ok"})})
app.put('/', (req,res)=>{res.status(202).send({message:"ok"})})
app.delete('/', (req,res)=>{res.status(202).send({message:"ok"})})

*/

//get isteği geldiğinde app.js dosyasını indir
app.get('/download', (req,res)=>{res.download('./app.js','newname.js')}) // indirilen dosyaya yeni isim verir, ikinciyi alır.

//? show file content
app.get('/show', (req,res)=>{res.sendFile(__dirname + '/app.js')}) // tam dosya yolu lazım



//?redirect  301 or  302
app.get('/kalici', (req,res)=>{res.redirect(301, 'https://www.clarusway.com')}) //! ====== 301 
app.get('/gecici', (req,res)=>{res.redirect(302, 'https://clarusway.com/courses/')}) //! ===== 302



// app.listen(8000)
// app.listen(8000,()=>console.log('Server running'));
// app.listen(8000,()=>console.log('Server running on http://127.0.0.1'));
app.listen(8000,()=>console.log(`Server running on http://${HOST}:${PORT}`));
