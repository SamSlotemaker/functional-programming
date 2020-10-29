//returns sorted array from small to large numbers
export function sortArraySmallToLarge(array) {
    //copy arrays to remove reference to original array
    let newArray = copyArray(array)
    return newArray.sort((a, b) => {
        return a - b
    })
}

//returns sorted array from large to small numbers
export function sortArrayLargeToSmall(array) {
    let newArray = copyArray(array)
    return newArray.sort((a, b) => {
        return b - a
    })
}

//returns copy from given array
export function copyArray(array) {
    let newArray = [...array]
    return newArray
}

//returns filtered array on given column
export function filterArray(array, column) {
    return array.map(arrayItem => arrayItem[column])
}

export function uniqueArray(array) {
    return [...new Set(array)];
}