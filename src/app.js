const express = require('express')//load express library
// const geocode = require('../utils/geocode')
// const forecast = require('../utils/forecast')


const app = express()

// app.com
app.get('', (req, res) => {
    res.send('Hello express!')
})

// app.com/help
app.get('/help', (req, res)=>{
    res.send('Help Page!')
})

//app.com/about
app.get('/about', (req, res)=>{
    res.send('about page')
})

//app.com/weather
app.get('/weather', (req, res)=>{
    res.send('weather Page')
})



app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})