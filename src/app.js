const path = require('path') //it is a core node module
const express = require('express') //load express library
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const hbs = require('hbs')
const { request } = require('http')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handleBars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// app.com/help
const helpPageRoute = path.join(__dirname, '../public/help')
app.use(express.static(helpPageRoute))

//app.com/about
const aboutPageRoute = path.join(__dirname, '../public/about')
app.use(express.static(aboutPageRoute))


//render index page
//req:request object
//res: reponse object
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
        name: 'Igor Garcia'
    })
})

//app.com/weather
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please, type an addres'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })

    })
})



app.get('/products', (req, res) => {
    if (!req.query.search) { //if there's no search in the link
        return res.send({
            error: 'You must provide a search term!'
        })
    }
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 404,
        errorMessage: 'Help article page not found.',
        name: 'Igor Garcia'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
        errorMessage: 'Page not found.',
        name: 'Igor Garcia'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})