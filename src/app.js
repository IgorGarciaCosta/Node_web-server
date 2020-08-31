const path = require('path')//it is a core node module
const express = require('express')//load express library
// const geocode = require('../utils/geocode')
// const forecast = require('../utils/forecast')


const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

//Setup handleBars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// app.com/help
const helpPageRoute = path.join(__dirname, '../public/help')
app.use(express.static(helpPageRoute))

//app.com/about
const aboutPageRoute = path.join(__dirname, '../public/about')
app.use(express.static(aboutPageRoute))


//render index page
app.get('', (req, res) => {
    //render one of handlebars templates
    res.render('index', {
        title: 'Weather App',
        name: 'Igor Garcia'
    })

})


//render about page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Igor Garcia'
    })
})


//render help page
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        helpText: 'hello, thats the help page!'
    })
})

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