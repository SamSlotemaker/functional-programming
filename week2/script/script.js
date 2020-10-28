import * as arrayManipulations from './modules/arrayManipulations.js'
import * as calculations from './modules/calculations.js'

const geoVerkoopPuntenURL = 'https://opendata.rdw.nl/resource/cgqw-pfbp.json?$limit=10000'
const tariefdeelURL = 'https://opendata.rdw.nl/resource/534e-5vdg.json?$limit=10000'
const columnLocation = 'location'
const columnStepSizeFarePart = 'stepsizefarepart'
const columnAmountFarePart = 'amountfarepart'

//fetch geodata from selling points
getData(geoVerkoopPuntenURL)
    .then(response => response.json())
    .then(data => {
        const sellingPointLocations = arrayManipulations.filterArray(data, columnLocation)
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
        const amountPerStep = arrayManipulations.filterArray(data, columnAmountFarePart)
        const stepSizeInMinutes = arrayManipulations.filterArray(data, columnStepSizeFarePart)
        //calculate price per hour for sellingpoints
        const pricePerHour = calculations.calculatePricePerHour(amountPerStep, stepSizeInMinutes)
        //sort from large to small
        const sortedPricePerHour = arrayManipulations.sortArrayLargeToSmall(pricePerHour)

        console.log(pricePerHour)
        console.log(sortedPricePerHour)
    })
    .catch(error => {
        console.log('ooops', error)
    })

//returns promise with data from given url
function getData(url) {
    return fetch(url)
}