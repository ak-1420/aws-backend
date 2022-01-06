const express = require('express')
const app = express()
const port = process.env.PORT || 8080


app.get('/' ,(req , res) => {
    res.send('<center><h1> Welcome </h1></center>')
})

app.listen(port ,() => {
    console.log(`server running on ${port}`)
})