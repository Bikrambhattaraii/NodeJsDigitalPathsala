const express =require("express")
const app =express()
// ejs = embeded js
app.set(("view engine","ejs"))  // ejs ma garna lachu vanera dekhaune for pug side ma "pug"

app.get('/',(req,res) =>{
    // const name="bikram"    
    // yesari const banara ni pass garna milcha
// res.send("hello world")
res.render("home.ejs" ,{name:"bikram" }) //name chai props jasari jancha // views vitra ko file render garcha


})

const lastName="bhattarai"
app.get('/about',(req,res)=>{
    res.render("about.ejs" ,{lastName:lastName} )
})

app.get('/contact',(req,res)=>{
    res.send("<h1>hello</h1>")
})
app.listen(3000,()=>{
    console.log("nodejs project initaied in port 3000")
})