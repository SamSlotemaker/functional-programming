let kleurOgen = require('../kleurOgen.json')
let favorieteKleuren = require('../favorieteKleuren.json')
let kleurCodes = require('./colorCodes.js')
const rgbHex = require('rgb-hex')


let kleurOgenArray = cleanColorData(kleurOgen, "KleurOgen")
console.log("kleur ogen: \n", kleurOgenArray)

let favorieteKleurArray = cleanColorData(favorieteKleuren, "Lievelingskleur")
console.log("favoriete kleuren: \n", favorieteKleurArray)

//functie declaraties
function cleanColorData(array, objectNaam) {
    let kleurenArray = [];

    //loop door elk object in de array
    array.forEach((kleur, index) => {
        let nieuweKleur = kleur[objectNaam]

        //verwijder ongewenste tekens
        nieuweKleur = nieuweKleur
            .toLowerCase()
            .replace(/\s/g, '')
            .replace(".", "")
            .replace("/", "")

        //maak een hex van rgb kleuren (gefilterd op de komma in rgb)
        if (nieuweKleur.includes(',')) {
            nieuweKleur = `#${rgbHex(nieuweKleur)}`
        }
        //kleurnamen naar hexcode
        if (nameToHex(nieuweKleur)) {
            nieuweKleur = nameToHex(nieuweKleur)
        }

        nieuweKleur = addHash(nieuweKleur)

        //maak wit en zwart voor alle rijen gelijk
        if (nieuweKleur === '#fff') {
            nieuweKleur = '#ffffff'
        } else if (nieuweKleur === '#000') {
            nieuweKleur = '#000000'
        }

        kleurenArray.push({
            'student': index,
            'kleurOgen': nieuweKleur
        })
    })
    return kleurenArray;
}


// console.log(kleurCodes);

//check op kleurnamen en return bijhorende CSS hex
function nameToHex(name) {
    for (kleur of kleurCodes) {
        if (name == kleur.naam) {
            return kleur.kleurCode
        }
    }
    return false;
}

//voeg hash toe wanneer deze ontbreekt
function addHash(kleur) {
    if (kleur[0] != '#') {
        kleur = '#' + kleur

        if (kleur === '#') {
            kleur = null
        }
    }
    return kleur;
}