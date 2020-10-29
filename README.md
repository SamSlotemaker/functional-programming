# functional-programming
![picture of data visualisatoin](https://i.pinimg.com/originals/2e/e6/99/2ee6998e34c3e2eff7b894c66cfc5267.jpg)

## :grey_question: Beschrijving
In deze repo vind je mijn proces van het vak functional programming, een 2 weken durend vak gegeven aan de HvA Tech-Track op Communication & Multimedia Design.

### :red_car:  Opdracht 
De opdracht is het maken van een verhalende visualisatie voor de Volkskrant, met als thema 'de auto in de stad'. Hierbij is het zaak dat er een nieuwswaarde aan het verhaal hangt en alles een geheel vormt. 


#### Week 1
Het resultaat van week 1 is te vinden op github pages
https://samslotemaker.github.io/functional-programming/week1/dataOpschonen/public/index.html


## :pencil: Concept 
### Hoofdvraag
Waardoor onstaat vernieuwing bij parkeergelegenheden?

### Deelvragen
* Is er een bepaalde groei van parkeerautomaten per jaar op verschillende plekken?
    - beschikbare data: GEO informatie van verkooppunten: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEO-VERKOOPPUNT/cgqw-pfbp/data
* Hangt de parkeerprijs samen met deze groei?
    - beschikbare data: prijzen van parkeergebieden https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg/data
* Hangt de parkeerprijs/groei in automaten samen met het gemiddelde vermogen/salaris per gebied?
    - beschikbare data: CSV met vermogen per gemeenten: https://www.cbs.nl/nl-nl/nieuws/2019/47/vermogen-van-huishoudens-opnieuw-gestegen

Ik verwacht dat er een grotere groei van parkeerautomaten is afgelopen jaren op gebieden waar de parkeerprijs hoger ligt. Ik denk dat er de afgelopen jaren een redelijke groei van nieuwe automaten is ontstaan door het veelvoudig gebruik van de auto. 

### Data
De tabellen en kolommen die ik hiervoor ga gebruiken zijn: 

GEO verkooppunten: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEO-VERKOOPPUNT/cgqw-pfbp/data
 - Start selling point: op welke datum is het verkooppunt in gebruik gegaan
 - Location: lengte en breedte graden van het verkooppunt
 - Selling point description: Beschrijving van de locatie.
 API eindpunt: https://opendata.rdw.nl/resource/cgqw-pfbp.json?$limit=10000

Tariefdeel: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg/data
 - AmountFarePart: prijs in euro's per stap
 - StepSizeFarePart: grootte van stap in minuten
 Bovenstaande kolommen kan ik omrekenen naar de uurprijs van het gebied.    
 API eindpunt: https://opendata.rdw.nl/resource/534e-5vdg.json?$limit=10000

 Ik kan bovenstaande tabellen combineren door de aanwezigheid van een areaManagerId in beide tabellen.

## :gear: Installation
1. Clone deze repository
```
git clone https://github.com/SamSlotemaker/functional-programming.git
```
2. open het project op een live server

## :heart: Aknowledgement
* StackOverflow voor bug fixes
* Medium voor aanvullende informatie
