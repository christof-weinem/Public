
console.log ("Hallo Welt!")

document.getElementById("idblackborder").classList.toggle("classblackborder")

function fac( n ) {
// welchen Wert hat n? - wenn n gleich 1 ist, dann muessen wir mit 1 zurueck (raus aus der Funktion)
if (n == 1) {
return 1;
}

// wenn n > 1, dann koennen wir das machen (fac aufrufen)
return n * fac( n - 1 );
}

//var zahl=fac (3);
//console.log ((zahl));

function faculty( zahl ) 
{
	var n = 1; // Zum hochzaehlen
	var m = 1; // Ergebnis (Fakultät)
	while ( n <= zahl ) {
		m = m * n;
		n = n + 1;
                console.log(m);
	}
	return m;
}

function ausrechnen() {
	var eingabe = document.getElementById("eingabefeld").value;

	var ausgabe = faculty(eingabe);
	document.getElementById("ausgabefeld").value = ausgabe;
}
//ausrechnen();
document.getElementById("Rechner").addEventListener("click",ausrechnen);
