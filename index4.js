console.log("Ja");
function namen_verknuepfen() {
    //Eiingabe
    var vorname = document.getElementById("vorname").value;
    var nachname = document.getElementById("nachname").value;
    //Verarbeitung
    var name = "";
    if (vorname=="") {  
        name = nachname;
        console.log("Vorname ist leer");
    } else {
        name = vorname + " " + nachname;
    }
    //Ausgabe
    document.getElementById("name").value = name;
}
var derButton = document.getElementById("drueck_mich");
derButton.addEventListener("click",namen_verknuepfen);
