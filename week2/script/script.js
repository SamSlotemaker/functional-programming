const specificatiesParkeergebied = 'https://opendata.rdw.nl/resource/b3us-f26s.json'
const columnCapacity = 'capacity'


getData(specificatiesParkeergebied)
    .then(response => response.json())
    .then(data => {
        const capacityArray = filterArray(data, columnCapacity)
        const sortedCapacity = sortArrayLargeToSmall(capacityArray)
        console.log(sortedCapacity)
        console.log(capacityArray)
    })


//returns sorted array from small to large numbers
function sortArraySmallToLarge(array) {
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