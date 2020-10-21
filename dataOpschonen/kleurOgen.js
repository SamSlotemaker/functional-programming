let kleurOgen = require('../kleurOgen.json')
let favorieteKleuren = require('../favorieteKleuren.json')
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

        //verwijder spaties
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

//check op kleurnamen en return bijhorende CSS hex
function nameToHex(name) {
    if (name == "blauw") {
        return "#0000FF"
    } else if (name == 'groen' || name == 'legergroen') {
        return "#008000"
    } else if (name == 'bruin') {
        return "#A52A2A"
    } else if (name == 'lichtblauw') {
        return "#ADD8E6"
    } else if (name == 'geel') {
        return "#FFFF00"
    } else if (name == 'rood') {
        return "#FF0000"
    } else if (name == 'zwart') {
        return "#000000"
    } else if (name == 'grijs' || name == 'staal') {
        return "#808080"
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