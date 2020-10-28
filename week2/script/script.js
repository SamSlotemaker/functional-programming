const geoVerkoopPuntenURL = 'https://opendata.rdw.nl/resource/cgqw-pfbp.json?$limit=10000'
const tariefdeelURL = 'https://opendata.rdw.nl/resource/534e-5vdg.json?$limit=10000'
const columnLocation = 'location'
const columnStepSizeFarePart = 'stepsizefarepart'
const columnAmountFarePart = 'amountfarepart'

//fetch geodata from selling points
getData(geoVerkoopPuntenURL)
    .then(response => response.json())
    .then(data => {
        const sellingPointLocations = filterArray(data, columnLocation)
        console.log(sellingPointLocations[0])
    })
    .catch(error => {
        console.log('ooops:', error)
    })

//fetch tariefdeel API
getData(tariefdeelURL)
    .then(response => response.json())
    .then(data => {
        //filter arrays on columns
        const amountPerStep = filterArray(data, columnAmountFarePart)
        const stepSizeInMinutes = filterArray(data, columnStepSizeFarePart)
        //calculate price per hour for sellingpoints
        const pricePerHour = calculatePricePerHour(amountPerStep, stepSizeInMinutes)
        //sort from large to small
        const sortedPricePerHour = sortArrayLargeToSmall(pricePerHour)
        console.log(pricePerHour)
        console.log(sortedPricePerHour)

    })
    .catch(error => {
        console.log('ooops', error)

    })

//returns price per hour, given is a price per step, and time in minutes for the step
function calculatePricePerHour(stepSize, stepSizeInMinutes) {
    const pricePerHour = [];
    stepSizeInMinutes.forEach((step, index) => {
        pricePerHour.push(stepSize[index] / step * 60)
    })
    return pricePerHour
}

//returns sorted array from small to large numbers
function sortArraySmallToLarge(array) {
    //copy arrays to remove reference to original array
    let newArray = copyArray(array)
    return newArray.sort((a, b) => {
        return a - b
    })
}

//returns sorted array from large to small numbers
function sortArrayLargeToSmall(array) {
    let newArray = copyArray(array)
    return newArray.sort((a, b) => {
        return b - a
    })
}

//returns copy from given array
function copyArray(array) {
    let newArray = [...array]
    return newArray
}

//returns promise with data from given url
function getData(url) {
    return fetch(url)
}

//returns filtered array on given column
function filterArray(array, column) {
    return array.map(arrayItem => arrayItem[column])
}