const express =require("express")
const app =express()

app.get('/',(req,res) =>{
res.send("hello world")
// if / hamyo vane hello world aucha

})

app.get('/about',(req,res)=>{
    res.send("this is about page")
})

app.get('/contact',(req,res)=>{
    res.send("<h1>hello</h1>")
})
app.listen(3000,()=>{
    console.log("nodejs project initaied in port 3000")
})