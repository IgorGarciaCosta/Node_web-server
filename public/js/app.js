console.log('Client side javascript file is loaded!')
const weatherForm = document.querySelector('form')
const typedSearch = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const image = document.getElementById("sunny")



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() //prevent the browser to refresh the page

    const typedLocation = typedSearch.value
    messageOne.textContent = 'Loading ...'
    messageTwo.textContent = ''
    image.src = "/img/transparent.jpg";

    fetch('/Weather?address=' + typedLocation).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                const weatherPictureSelectorString = data.forecast
                selectPicture(weatherPictureSelectorString)
            }
        })
    })
})

function selectPicture(weatherPictureSelectorString) {
    if (weatherPictureSelectorString.includes('cloudy')) {
        image.class = "portrait";
        image.src = "img/backWeatherCloudy.png";
    } else if (weatherPictureSelectorString.includes('Sunny')) {
        image.class = "portrait";
        image.src = "img/backWeather.png";
    } else if (weatherPictureSelectorString.includes('Clear')) {
        image.class = "portrait";
        image.src = "img/backWeatherClear.png";
    } else if (weatherPictureSelectorString.includes('rain')) {
        image.class = "portrait";
        image.src = "img/backWeatherRainy.png";
    }
}