console.log('Client side javascript file is loaded!')
const weatherForm = document.querySelector('form')
const typedSearch = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() //prevent the browser to refresh the page

    const typedLocation = typedSearch.value

    fetch('http://localhost:3000/Weather?address=' + typedLocation).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})