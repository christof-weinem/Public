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
	var eingabe = document.getElementById("outbox").value;

	var ausgabe = faculty(eingabe);
	document.getElementById("resultbox").value = ausgabe;
}
//ausrechnen();
//document.getElementById("Rechner").addEventListener("click",ausrechnen);

function funktion_ausgabe_1() {
  funktion_ausgabe(1);
}
function funktion_ausgabe_2() {
    funktion_ausgabe(2);
  }
  function funktion_ausgabe_3() {
    funktion_ausgabe(3);
  }
  function funktion_ausgabe_4() {
    funktion_ausgabe(4);
  }
  function funktion_ausgabe_5() {
    funktion_ausgabe(5);
  }
  function funktion_ausgabe_6() {
    funktion_ausgabe(6);
  }
  function funktion_ausgabe_7() {
    funktion_ausgabe(7);
  }
  function funktion_ausgabe_8() {
    funktion_ausgabe(8);
  }
  function funktion_ausgabe_9() {
    funktion_ausgabe(9);
  }
  function funktion_ausgabe_0() {
    funktion_ausgabe(0);
  }

function funktion_ausgabe(number) {
	var existingvalue = document.getElementById("outbox").value;
    existingvalue = existingvalue + number;
	document.getElementById("outbox").value = existingvalue;
}
function x2(m) {
    var x = 0;
    x = m*m; 
    return x
} 
function output_x2() {
    var existingvalue = document.getElementById("outbox").value;
    var ausgabe = x2(existingvalue);
    document.getElementById("resultbox").value = ausgabe;
}
function sqrt(m) {
    var x = 0;
    x = Math.sqrt(m); 
    return x
} 
function output_sqrt() {
    var existingvalue = document.getElementById("outbox").value;
    var ausgabe = sqrt(existingvalue);
    document.getElementById("resultbox").value = ausgabe;
}
function clearall() {
    document.getElementById("outbox").value = "";
    document.getElementById("resultbox").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("linkeroperand").value = "";
    console.log("clearall");
}
function funktion_operand_plus() {
  var existingvalue = document.getElementById("outbox").value;
  document.getElementById("linkeroperand").value = existingvalue;
  document.getElementById("operator").value = "+";
  document.getElementById("outbox").value = "";
    console.log("operator");
}
function funktion_operand_minus() {
  var existingvalue = document.getElementById("outbox").value;
  document.getElementById("linkeroperand").value = existingvalue;
  document.getElementById("operator").value = "-";
  document.getElementById("outbox").value = "";
    console.log("operator");
}
function funktion_operand_division() {
  var existingvalue = document.getElementById("outbox").value;
  document.getElementById("linkeroperand").value = existingvalue;
  document.getElementById("operator").value = "/";
  document.getElementById("outbox").value = "";
    console.log("operator");
}
function funktion_operand_multiplik() {
  var existingvalue = document.getElementById("outbox").value;
  document.getElementById("linkeroperand").value = existingvalue;
  document.getElementById("operator").value = "*";
  document.getElementById("outbox").value = "";
    console.log("operator");
}
function funktion_result() {
  var rop = document.getElementById("outbox").value;
  var lop = document.getElementById("linkeroperand").value;
  var operator = document.getElementById("operator").value;
  var result = 0;
  rop=parseInt(rop);
  lop=parseInt(lop);
  result=parseInt(result);
  switch (operator) {
    case "+": result = lop + rop;
    document.getElementById("resultbox").value = result;
    break;
    case "-": result = lop - rop;
    document.getElementById("resultbox").value = result;
    break;
    case "/": result = lop / rop;
    document.getElementById("resultbox").value = result;
    break;
    case "*": result = lop * rop;
    document.getElementById("resultbox").value = result;
    break;
  }
}

document.getElementById("r4-1").addEventListener("click",funktion_ausgabe_1);
document.getElementById("r4-2").addEventListener("click",funktion_ausgabe_2);
document.getElementById("r4-3").addEventListener("click",funktion_ausgabe_3);
document.getElementById("r3-1").addEventListener("click",funktion_ausgabe_4);
document.getElementById("r3-2").addEventListener("click",funktion_ausgabe_5);
document.getElementById("r3-3").addEventListener("click",funktion_ausgabe_6);
document.getElementById("r2-1").addEventListener("click",funktion_ausgabe_7);
document.getElementById("r2-2").addEventListener("click",funktion_ausgabe_8);
document.getElementById("r2-3").addEventListener("click",funktion_ausgabe_9);
document.getElementById("r5-1").addEventListener("click",funktion_ausgabe_0);
document.getElementById("r1-1").addEventListener("click",clearall);
document.getElementById("Fakultaet").addEventListener("click",ausrechnen);
document.getElementById("x2").addEventListener("click",output_x2);
document.getElementById("sqrt").addEventListener("click",output_sqrt);
document.getElementById("r4-4").addEventListener("click",funktion_operand_plus);
document.getElementById("r3-4").addEventListener("click",funktion_operand_minus);
document.getElementById("r1-4").addEventListener("click",funktion_operand_division);
document.getElementById("r2-4").addEventListener("click",funktion_operand_multiplik);
document.getElementById("r5-3").addEventListener("click",funktion_result);