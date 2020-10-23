const kleurOgen = kleurOgenData
const kleurOgenPropertyName = "KleurOgen"
const favorieteKleuren = lievelingsKleuren
const favorieteKleurenPorpertyName = "Lievelingskleur"
const kleurCodes = kleurObjecten;


// start functiechain
const favorieteKleurArray = cleanColorData(favorieteKleuren, "Lievelingskleur")
const kleurOgenArray = cleanColorData(kleurOgen, kleurOgenPropertyName)

//voegt de kleuren toe aan de dom (arry + propertynaam)


//sorteer arrays
let kleurOgenArraySorted = [...kleurOgenArray];
kleurOgenArraySorted.sort((a, b) => {
    return getContrastYIQ(a[kleurOgenPropertyName]) - getContrastYIQ(b[kleurOgenPropertyName])
})

let favorieteKleurArraySorted = [...favorieteKleurArray]
favorieteKleurArraySorted.sort((a, b) => {
    return getContrastYIQ(a[favorieteKleurenPorpertyName]) - getContrastYIQ(b[favorieteKleurenPorpertyName])
})


// addToDoc(kleurOgenArray, kleurOgenPropertyName);
addToDoc(favorieteKleurArraySorted, favorieteKleurenPorpertyName)
addToDoc(kleurOgenArraySorted, kleurOgenPropertyName);
// addToDoc(favorieteKleurArray, "Lievelingskleur")



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

        //voeg een hash toe aan alle kleuren wanneer deze ontbreekt plus alles in hoofdletters
        nieuweKleur = addHash(nieuweKleur)
        nieuweKleur = nieuweKleur.toUpperCase()

        //check of de kleur een valide kleur is en push de valide kleur naar de array
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


//contrast calculator van https://medium.com/@druchtie/contrast-calculator-with-yiq-5be69e55535c
function getContrastYIQ(color) {
    color = color.replace('#', '')
    let r = parseInt(color.substr(0, 2), 16)
    let g = parseInt(color.substr(2, 2), 16)
    let b = parseInt(color.substr(4, 2), 16)
    let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
    return yiq
}


//voegt de kleuren uit de array toe aan de dom
function addToDoc(array, kolomnaam) {
    //voeg div toe voor de container van de kleuren

    let container = document.createElement('div');
    let heading = document.createElement('h2')
    let headingTxt = document.createTextNode(kolomnaam);
    heading.appendChild(headingTxt);
    container.appendChild(heading)
    container.id = (kolomnaam)
    container.classList.add('color-container')

    //voeg toe bovenin de body
    document.getElementsByTagName('body')[0].insertBefore(container, document.body.firstChild)


    array.forEach(item => {
        //voeg per kleur een div toe aan de container
        let kleuren = document.getElementById(kolomnaam)
        var div = document.createElement('div')
        div.style.backgroundColor = item[kolomnaam]
        var par = document.createElement('p')
        var txt = document.createTextNode(item[kolomnaam])
        par.appendChild(txt)
        div.appendChild(par);
        kleuren.appendChild(div)

        //pas tekstkleur aan naar contrast
        if (getContrastYIQ(item[kolomnaam]) <= 128) {
            par.style.color = 'white'
        } else {
            par.style.color = 'black'

        }
    })
}