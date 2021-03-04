function proveriIme() {
	return (document.forma.ime.value.length>=6 && 
			document.forma.ime.value.length<=10);
}

// U JavaScript-u Stringovi se porede sa '==' za razlliku od Java-e, gde je potrebno koristiti equals() method.
function proveriJednakostSifri() {
	return document.forma.sifra.value == document.forma.sifra2.value;
}

// Proveramo da li uneta sifra ima sve sto je potrebno, tj. bar jedno malo slovo, bar jedno veliko slovo i bar jednu cifru.
function proveriValidnostSifre() {
	var malo = false, veliko=false, cifra=false;
	var s = document.forma.sifra.value;
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		if (ch >= '0' && ch <= '9')
			cifra = true;
		else if (ch >= 'A' && ch <='Z')
			veliko=true
		else if (ch >= 'a' && ch <= 'z')
			malo=true;
	}   
	return malo && veliko && cifra;
}

// krajnja provera. Ako je sve OK, vracamo true, a ako nije korisniku kazemo sta nije dobro popunjeno.
function provera() { 
	if (!proveriIme()) {
		alert("Dužina imena treba da je između 6 i 10 znakova."); 
		return false;
	} else if (!proveriJednakostSifri()) { 
		alert ("Šifre nisu iste."); 
		return false;
	} else if (!proveriValidnostSifre()) { 
		alert("Šifra mora imati makar jedan mali i veliki znak i cifru.");
		return false;
	}
	return true;
}
