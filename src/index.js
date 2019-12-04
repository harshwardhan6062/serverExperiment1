const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/',(req,res) => {
    res.send('THIS IS BULLSHIT')
})

app.listen(port , () => {
    console.log('App is running on port ' , port)
})