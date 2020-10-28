# functional-programming

Week 1
Het resultaat van week 1 is te vinden op github pages
https://samslotemaker.github.io/functional-programming/week1/dataOpschonen/public/index.html

## Hoofdvraag
Waar ontstaan prijsverschillen bij het parkeren in Nederland?

### Deelvragen
Is er een bepaalde groei van parkeerautomaten op verschillende plekken?
Hangt de parkeerprijs samen met deze groei?

Ik verwacht dat er een grotere groei van parkeerautomaten is afgelopen jaren op gebieden waar de parkeerprijs hoger ligt. Ik denk dat er de afgelopen jaren een redelijke groei van nieuwe automaten is ontstaan door het veelvoudig gebruik van de auto. 

### Data
De tabellen en kolommen die ik hiervoor ga gebruiken zijn: 

GEO verkooppunten: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEO-VERKOOPPUNT/cgqw-pfbp/data
 - Start selling point: op welke datum is het verkooppunt in gebruik gegaan
 - Location: lengte en breedte graden van het verkooppunt
 - Selling point description: Beschrijving van de locatie
API eindpunt: https://opendata.rdw.nl/resource/cgqw-pfbp.json?$limit=10000

Tariefdeel: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg/data
 - AmountFarePart: prijs in euro's per stap
 - StepSizeFarePart: grootte van stap in minuten
 Bovenstaande kolommen kan ik omrekenen naar de uurprijs van het gebied.
 API eindpunt: https://opendata.rdw.nl/resource/534e-5vdg.json?$limit=10000

 Ik kan bovenstaande tabellen combineren door de aanwezigheid van een areaManagerId in beide tabellen.


