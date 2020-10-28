 //returns price per hour, given is a price per step, and time in minutes for the step
 export function calculatePricePerHour(stepSize, stepSizeInMinutes) {
     const pricePerHour = [];
     stepSizeInMinutes.forEach((step, index) => {
         pricePerHour.push(stepSize[index] / step * 60)
     })
     return pricePerHour
 }