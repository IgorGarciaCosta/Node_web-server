console.log('Client side javascript file is loaded!')
const weatherForm = document.querySelector('form')
const typedSearch = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() //prevent the browser to refresh the page

    const typedLocation = typedSearch.value
    messageOne.textContent = 'Loading ...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/Weather?address=' + typedLocation).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})