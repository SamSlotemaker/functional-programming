const kleurOgen = kleurOgenData
const favorieteKleuren = lievelingsKleuren
const kleurCodes = kleurObjecten;


// start functiechain
const kleurOgenArray = cleanColorData(kleurOgen, "KleurOgen")
const favorieteKleurArray = cleanColorData(favorieteKleuren, "Lievelingskleur")

console.log("kleur ogen: \n", kleurOgenArray)
console.log("favoriete kleuren: \n", favorieteKleurArray)
console.log(`aantal rijen over: ${kleurOgenArray.length}`)
console.log(`aantal rijen over: ${favorieteKleurArray.length}`)


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

        //kleurnamen naar hexcode
        if (nameToHex(nieuweKleur)) {
            nieuweKleur = nameToHex(nieuweKleur)
        }

        //zet 3 charachter hex om naar 6
        nieuweKleur = hexThreeToSix(nieuweKleur)

        //voeg een hash toe aan alle kleuren wanneer deze ontbreekt
        nieuweKleur = addHash(nieuweKleur)

        if (validateHex(nieuweKleur)) {
            kleurenArray.push({
                'student': index + 1,
                [objectNaam]: nieuweKleur
            })
        }
    })
    return kleurenArray;
}

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
    }
    return kleur;
}

//check of het een valide kleur is
function validateHex(kleur) {
    return /^#[0-9A-F]{6}$/i.test(kleur)
}

//convert hash van 3 chars naar 6
function hexThreeToSix(kleur) {
    //verwijder hash wanneer aanwezig
    kleur = kleur.replace('#', '')

    //pas hex patroon toe op 3 char hex
    if (kleur.length == 3) {
        kleur = kleur[0] + kleur[0] + kleur[1] + kleur[1] + kleur[2] + kleur[2]
    }
    return kleur
}