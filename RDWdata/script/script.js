import * as arrayManipulations from './modules/arrayManipulations.js'
import * as calculations from './modules/calculations.js'
import * as cleanData from './modules/cleanData.js'

const geoVerkoopPuntenURL = 'https://opendata.rdw.nl/resource/cgqw-pfbp.json?$limit=100'
const tariefdeelURL = 'https://opendata.rdw.nl/resource/534e-5vdg.json?$limit=100'
const columnLocation = 'location'
const columnStartDateSellingpoint = 'startdatesellingpoint'
const columnStepSizeFarePart = 'stepsizefarepart'
const columnAmountFarePart = 'amountfarepart'


const verkoopPunten = getData(geoVerkoopPuntenURL);
const tariefDeel = getData(tariefdeelURL)
const allPromises = Promise.all([verkoopPunten, tariefDeel]).then(res => {
    const responses = res.map(response => response.json())
    return Promise.all(responses)
})

//ophalen stad uit geodata
// let lat = "52.654419"
// let lon = "4.802728"
// let reverseGeoURL = 'https://api.geoapify.com/v1/geocode/reverse?lat=' + lat + '&lon=' + lon + '&lang=en&limit=1&apiKey=3f7178ec150147b68f8f7517b79b7ebe'
// getData(reverseGeoURL)
//     .then(result => {
//         return result.json()
//     })
//     .then(data => {
//         const city = data.features[0].properties.city
//         console.log(city)
//     })


allPromises.then(data => {

        //ophalen arrays uit de data
        const verkoopPuntenArray = data[0]; //array met verkooppunten
        const tariefDeelArray = data[1] //array met prijs informatie

        // filter arrays on columns
        const sellingPointLocations = arrayManipulations.filterArray(verkoopPuntenArray, columnLocation)
        const sellingPointDate = arrayManipulations.filterArray(verkoopPuntenArray, columnStartDateSellingpoint)

        const amountPerStep = arrayManipulations.filterArray(tariefDeelArray, columnAmountFarePart)
        const stepSizeInMinutes = arrayManipulations.filterArray(tariefDeelArray, columnStepSizeFarePart)
        //calculate price per hour for sellingpoints
        const pricePerHour = calculations.calculatePricePerHour(amountPerStep, stepSizeInMinutes)
        //sort from large to small
        const sortedPricePerHour = arrayManipulations.sortArrayLargeToSmall(pricePerHour)

        //refactor dates and check years
        const refactoredSellingPointDates = cleanData.refactorDates(sellingPointDate)
        const sellingPointYears = refactoredSellingPointDates.map(date => date.year)
        const countedYears = calculations.countItemsinArray(sellingPointYears)

        console.log("volledige array: ", sellingPointYears)
        console.log("unieke jaren: ", arrayManipulations.uniqueArray(sellingPointYears))
        console.log("getelde jaren: ", countedYears)


        // console.log(arrayManipulations.uniqueArray(sellingPointYears))
        // console.log(sellingPointLocations[0])
        // console.log(pricePerHour)
        // console.log(sortedPricePerHour)

    })
    .catch(err =>
        console.log('oooooops:', err))

//returns promise with data from given url
function getData(url) {
    return fetch(url)
}