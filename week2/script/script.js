import * as arrayManipulations from './modules/arrayManipulations.js'
import * as calculations from './modules/calculations.js'

const geoVerkoopPuntenURL = 'https://opendata.rdw.nl/resource/cgqw-pfbp.json?$limit=10000'
const tariefdeelURL = 'https://opendata.rdw.nl/resource/534e-5vdg.json?$limit=10000'
const columnLocation = 'location'
const columnStepSizeFarePart = 'stepsizefarepart'
const columnAmountFarePart = 'amountfarepart'


const verkoopPunten = getData(geoVerkoopPuntenURL);
const tariefDeel = getData(tariefdeelURL)
const allPromises = Promise.all([verkoopPunten, tariefDeel]).then(res => {
    const responses = res.map(response => response.json())
    return Promise.all(responses)
})

allPromises.then(data => {

        //ophalen arrays uit de data
        const verkoopPuntenArray = data[0];
        const tariefDeelArray = data[1]

        //  filter arrays on columns
        const sellingPointLocations = arrayManipulations.filterArray(verkoopPuntenArray, columnLocation)
        const amountPerStep = arrayManipulations.filterArray(tariefDeelArray, columnAmountFarePart)
        const stepSizeInMinutes = arrayManipulations.filterArray(tariefDeelArray, columnStepSizeFarePart)
        //calculate price per hour for sellingpoints
        const pricePerHour = calculations.calculatePricePerHour(amountPerStep, stepSizeInMinutes)
        //sort from large to small
        const sortedPricePerHour = arrayManipulations.sortArrayLargeToSmall(pricePerHour)

        console.log(sellingPointLocations[0])
        console.log(pricePerHour)
        console.log(sortedPricePerHour)

    })
    .catch(err =>
        console.log('oooooops:', err))

//returns promise with data from given url
function getData(url) {
    return fetch(url)
}