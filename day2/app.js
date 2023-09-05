const express =require("express")
const app =express()
// ejs = embeded js
app.set(("view engine","ejs"))  // ejs ma garna lachu vanera dekhaune for pug side ma "pug"

app.get('/',(req,res) =>{
// res.send("hello world")
res.render("home.ejs") // views vitra ko file render garcha


})

app.get('/about',(req,res)=>{
    res.render("about.ejs")
})

app.get('/contact',(req,res)=>{
    res.send("<h1>hello</h1>")
})
app.listen(3000,()=>{
    console.log("nodejs project initaied in port 3000")
})