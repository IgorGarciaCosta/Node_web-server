console.log('Client side javascript file is loaded!')
const weatherForm = document.querySelector('form')
const typedSearch = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageTree = document.querySelector('#message-3')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() //prevent the browser to refresh the page

    const typedLocation = typedSearch.value
    messageOne.textContent = 'Loading ...'
    messageTwo.textContent = ''
    messageTree.textContent = ''

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
        messageTree.get('./img/robot.png')
            //messageTree.textContent = "Nublado"
    } else if (weatherPictureSelectorString.includes('Sunny')) {
        messageTree.get('./img/backWeather.png')
            //messageTree.textContent = "Ensolarado"
    }
}