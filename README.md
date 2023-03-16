# Fassaden Pflanzen Assistent

## Beschreibung
Dieses Tool wird ehrenamtlich für https://fassaden-begruenung.org entwickelt.  
Es soll Nutzern dabei helfen, anhand bestimmter Kriterien, die richtige oder die richtigen Pflanzen zu finden.  
Das Tool verkleinert also die Auswahl anhand der angegeben Kriterien.
Eine Demo kann <a href="https://ariukuto.github.io/React-Fassaden-Pflanzen-Assistent/"> hier <a> angesehen werden.

## Get started 
1. Falls noch nicht getan, node.js hier runterladen und installieren [link](https://nodejs.org/dist/v18.15.0/node-v18.15.0-x64.msi)
2. Mit `git clone https://github.com/Ariukuto/React-Fassaden-Pflanzen-Assistent.git` Reposistory klonen
3. In den Ordner wechseln
4. Rechtklick auf eine leere Fläche und im Kontextmennü `im Terminal öffnen` anklicken
5. npm start in die console eingeben (Projekt wird lokal ausgeführt)
6. Änderungen in der config machen, speichern
7. prüfen ob es funktioniert
8. Falls alles in Ordnung ist und den Wünschen entspricht, `npm run deploay` in der console eingeben und die Änderungen werden veröffentlicht


## Konfiguration & Pflege der Daten
-  Die Liste aller Pflanzen findet sich unter `src/config/plants.json`
-  Hintergrundfarbe usw. lässt sich unter `src/config/app.config.json` anpassen

## Das Pflanzen Objekt
Beispiel:
````json
{
	"name": "Ceratodon Purpureus",
	"type": "Moos",
	"winterHardinessZone": "6",
	"careLevel": "Gering",
	"foliagePhase": "Immergrün, ",
	"foliageColors": "Grün, Braun",
	"flowerColors": "Grün, Braun, Rosa",
	"exposition": "Sonnig, Halbschattig"
}
````

## App Konfiguration
Aktuell lassen sich folgende Einstellungen anpassen, diese werden fortlaufend erweitert

````json
{
	"defaultGridLayout": "GRID", // Wie das layout sein soll GRID oder LIST
	"navbar": {
		"backgroundColor": "#f8f9fa", // Hintergrundfarbe der Navigationleiste
		"title": "Fassadenpflanzen Assistent", // Der Titel der angezeigt werden soll
		"titleColor": "#447649", // Die Schriftfarbe des Titels
		"border": "1px solid #447649" // Wie der Rahmen aussehen soll
	},
	"sidebar": {
		"backgroundColor": "", // Hintergrundfarbe der Sidebar, Standard weiß
		"labelColor": "#447649", // Schriftfarbe der labels
		"border": "1px solid #447649" // Rahmen der Sidebar
	},
	"list": {
		"grid": {
			"img": false // Sollen Bilder angezeigt werden true oder false
		}
	}
}
````




## Nutzung

### Lokal testen
Im Projekt Ordner in der Commandozeile folgenden Befehl eingeben und ausführen
````
npm start
````

### Änderungen veröffentlichen
Wenn lokal alles funktioniert kann genau wie oben in der cmd folgender Befehl eingegeben und ausgeführt werden 
````
npm run deploy
````
Veröffentlicht die Änderungen auf  
``https://ariukuto.github.io/React-Fassaden-Pflanzen-Assistent/``

<a href="https://ariukuto.github.io/React-Fassaden-Pflanzen-Assistent/"> Link zur Seite <a>
