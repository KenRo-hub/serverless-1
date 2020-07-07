const express = require('express')
const app = express()

app.get('*', (req, res) =>{
    console.log('mi primera aplicación serverless')
    res.send({ mensaje : "Chanchito Feliz"})
})

module.exports =app
