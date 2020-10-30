 import {
     uniqueArray
 } from './arrayManipulations.js'

 //returns price per hour, given is a price per step, and time in minutes for the step
 export function calculatePricePerHour(stepSize, stepSizeInMinutes) {
     const pricePerHour = [];
     stepSizeInMinutes.forEach((step, index) => {
         pricePerHour.push(stepSize[index] / step * 60)
     })
     return pricePerHour
 }

 //counts all items in array
 export function countItemsinArray(array) {
     let allItems = uniqueArray(array) //maak array van alle unieke jaartallen
     let counter = [] //maak counter object dat later gevuld wordt

     allItems.forEach(item => {
         counter.push({
             "jaar": item,
             "aantal": 0
         })
     })

     for (let i = 0; i < array.length; ++i) { //loop over volledige array
         for (let j = 0; j < allItems.length; j++) { //loop over unieke jaartallen voor iedere waarde in volledige array
             if (array[i] == allItems[j])
                 counter[j].aantal += 1;
         }
     }
     return counter;
 }