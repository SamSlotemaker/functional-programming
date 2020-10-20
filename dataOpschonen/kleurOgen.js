let kleurOgen = require('../kleurOgen.json')
let favorieteKleuren = require('../favorieteKleuren.json')
const rgbHex = require('rgb-hex')

//nieuwe array om originele array bewaard te houden
let kleurOgenArray = [];
cleanColorData(kleurOgen, "KleurOgen")
console.log(kleurOgenArray)

let favorieteKleurArray = []
cleanColorData(favorieteKleuren, "Lievelingskleur")
console.log(favorieteKleurArray)

function cleanColorData(array, objectNaam) {
    array.forEach((kleur, index) => {

        let nieuweKleur = kleur[objectNaam]

        //verwijder spaties
        nieuweKleur = nieuweKleur.replace(/\s/g, '')

        //maak een hex van rgb kleuren (gefilterd op de komma in rgb)
        if (nieuweKleur.includes(',')) {
            nieuweKleur = `#${rgbHex(nieuweKleur)}`
        }

        nieuweKleur = nieuweKleur.toLowerCase();

        //kleurnamen naar hexcode
        if (nameToHex(nieuweKleur)) {
            nieuweKleur = nameToHex(nieuweKleur)
        }

        //voeg hash toe wanneer deze ontbreekt (ALTIJD LAATSTE FUNCTIE)
        if (nieuweKleur[0] != '#') {
            nieuweKleur = '#' + nieuweKleur
        }

        if (objectNaam == "KleurOgen") {
            kleurOgenArray.push({
                'student': index,
                'kleurOgen': nieuweKleur
            })
        } else if (objectNaam == "Lievelingskleur") {
            favorieteKleurArray.push({
                'student': index,
                'favorieteKleur': nieuweKleur
            })
        }

    })
}

//check op kleurnamen en return bijhorende CSS hex
function nameToHex(name) {
    if (name == "blauw") {
        return "#0000FF"
    } else if (name == 'groen') {
        return "#008000"
    } else if (name == 'bruin') {
        return "#A52A2A"
    } else if (name == 'lichtblauw') {
        return "#ADD8E6"
    }
    return false;
}