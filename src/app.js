const path = require('path')//it is a core node module
const express = require('express')//load express library
// const geocode = require('../utils/geocode')
// const forecast = require('../utils/forecast')


const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// app.com/help
const helpPageRoute = path.join(__dirname, '../public/help')
app.use(express.static(helpPageRoute))

//app.com/about
const aboutPageRoute = path.join(__dirname, '../public/about')
app.use(express.static(aboutPageRoute))

//app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'aaaaa',
        location: 'sssss'
    })
})



app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})