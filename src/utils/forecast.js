const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e7156a5755c35521fce13aa751142bf7&query=' + latitude + ',%20' + longitude + ''

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable ot connect to weather service!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.feelslike + '% change of rain.')
        }
    })

}

module.exports = forecast