console.log("Ja");
function empfaenger1 (antwort) {
    console.log("Die Datenen wurden empfangen");
    console.log(antwort);
    var json = antwort.json();
    return json;
}
function empfaenger2 ( json ) {
    console.log(json);
    console.log(json.vorname);
    console.log(json.nachname);
    var vorname = json.vorname;
    var nachname = json.nachname;
    document.getElementById("vorname").value = vorname;
    document.getElementById("nachname").value = nachname;
}
function mit_key_vor_nachname_abrufen() {
    // Eingabe
    var key = document.getElementById("eingabe").value;
    //Verarbeitung
    fetch("json/" + key + ".json")  // URL: was wir geholt
    .then(empfaenger1)              // was macht man damit: auspacken
    .then(empfaenger2)             //was macht man damit
    .then(verschicken);
}

function verschicken() {
    // URL:
    // http(s): Hypertext Transfer Protocol (s=secure)
    // ://
    // host: Gastgeber - ein Computer im Netzwerk
    // port: 80, 8000 - Nebenstelle
    // pfad/auf/eine - Verzeichnis
    // datei - "Der Endpunkt"
    //
    // var url = "https://host:port/pfad/auf/eine/datei";
    var url = "json/paul1.json";
    
    var vorname = document.getElementById("vorname").value
    var nachname = document.getElementById("nachname").value
    
    var data = {
    "vorname": vorname,
    "nachname": nachname
    };
    
    var datajson = JSON.stringify( data ); // JSON-Object to String
    
    // Verschicken der Daten
    fetch( url,
        {
            method: "POST", // "GET"
            body: datajson
        }
    );
}
var derButton = document.getElementById("drueck_mich");
derButton.addEventListener("click",mit_key_vor_nachname_abrufen);

