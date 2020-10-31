# functional-programming
![picture of data visualisatoin](https://i.pinimg.com/originals/2e/e6/99/2ee6998e34c3e2eff7b894c66cfc5267.jpg)

## :grey_question: Beschrijving
In deze repo vind je mijn proces van het vak functional programming, een 2 weken durend vak gegeven aan de HvA Tech-Track op Communication & Multimedia Design.

### :red_car:  Opdracht 
De opdracht is het maken van een verhalende visualisatie voor de Volkskrant, met als thema 'de auto in de stad'. Hierbij is het zaak dat er een nieuwswaarde aan het verhaal hangt en alles een geheel vormt. 

### Proces
Voor mijn volledige proces kun je naar de Wiki navigeren, waar ik mijn proces en denkwijze documenteer
https://github.com/SamSlotemaker/functional-programming/wiki

#### Week 1
![gif](SURVEYdata/colors.gif)
Het resultaat van week 1 is te vinden op github pages
https://samslotemaker.github.io/functional-programming/SURVEYdata/dataOpschonen/public/index.html

#### Week 2
![Imgur](https://imgur.com/aNpveBh.png)
Huidige status week 2:
https://samslotemaker.github.io/functional-programming/RDWdata/


## :pencil: Concept 

## ❓ Hoofdvraag
Is er samenhang te vinden tussen parkeerverniewing in gemeentes en de welvaart van deze spefieke gemeente?
_Dit is te meten door gemiddeld vermogen en de parkeerprijs per locatie, waarbij parkeervernieuwing de groei is in nieuwe parkeergelegenheden, carpoollocaties en parkeerautomaten_

## ❔ Deelvragen
**1. Op welke plaatsen en in welk jaar is er sprake van vernieuwing (groei in hoeveelheid parkeerautomaten/garages/carpoollocaties)?**    
_beschikbare data:_
* [GEO informatie van verkooppunten](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEO-VERKOOPPUNT/cgqw-pfbp/data)
   * Startsellingpoint: datum waarop verkooppunt actief werd
   * Location: geolocatie
* [Parkeergarages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34/data)
   * Startdatearea: datum waarop de garage actief werd
   * Location: geolocatie
* [Carpoollocaties](https://opendata.rdw.nl/Parkeren/GEO-Carpool/9c54-cmfx/data)
   * Startdatearea: datum waarop de carpoollocatie actief werd
   * Location: geolocatie

**Verwachting:** Ik verwacht dat er in grote steden een grotere groei te zien is, vooral de afgelopen jaren doordat er steeds meer auto's op de weg komen. 
***

**2. Is deze groei hoger op plaatsen waar de parkeerprijs duurder is?**    
_beschikbare data:_
* [Prijzen van parkeergebieden](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg/data)
    * AreaManagerId - nodig om te koppelen aan een andere tabel om zo de geolocatie te achterhalen
    * AmountFarePart - prijs in euro's per stap
    * StepSizeFarePart - grootte van de stap in minuten
_Bovenstaande data kan ik gebruiken om een uurprijs te bepalen_

**Verwachting:** Ik verwacht dat er zeker een verband is tussen prijs en vernieuwing. Ik denk dat ik wel in mijn achterhoofd moet houden dat de prijs in steden waarschijnlijk hoger ligt, dus dat de vernieuwing ook kan komen doordat steden simpelweg voller raken.
***

**3. Is deze groei hoger op plaatsen waar het gemiddelde vermogen van de gemeente groter is?**    
_beschikbare data:_     
* [CSV met vermogen per gemeenten](https://www.cbs.nl/nl-nl/nieuws/2019/47/vermogen-van-huishoudens-opnieuw-gestegen)
   * Gemeente
   * Gemiddeld vermogen per huishouden - toont welvaart aan binnen de regio

**Verwachting:** Ik verwacht niet perse dat het vermogen van huishoudens in contact staat met een groot vernieuwing in parkeergelegenheden. Ik denk juist dat een gebied dat veel welvaart heeft, minder externe parkeergelegenheid nodig heeft
***

Om mijn concept uit te werken wil ik alle geolocaties omzetten naar plaatsnamen. Hiermee kan ik met alle uurprijzen een gemiddelde prijs bepalen per plaats en op deze manier de prijzen, vermogens en vernieuwing samenvoegen.


## :gear: Installation
1. Clone deze repository
```
git clone https://github.com/SamSlotemaker/functional-programming.git
```
2. open het project op een live server

## :heart: Aknowledgement
* StackOverflow voor bug fixes
* Medium voor aanvullende informatie
* HvA Tech-Track docenten
* Medestudenten