function initialize() {
	postaviMaxDatumRodjenja();
}

function provera() {
	if(!odabranaTitula()) {
		alert("Odaberite titulu!");
		return false;
	} else if(!postojiImePrezime()) {
		alert("Unesite ime i prezime!");
		return false;
	} else if(!duzinaImePrezime()) {
		alert("Ime i prezime imaju bar 6 slova zajedno!");
		return false;
	} else if(!slovaImePrezime()) {
		alert("Ime i prezime sadrzi samo slova i \'-\'!");
		return false;
	} else if(!pocinjeVelikoIme()) {
		alert("Ime pocinje velikim slovom!");
		return false;
	} else if(!imaImePrezime()) {
		alert("Morate uneti i ime i prezime!");
		return false;
	} else if(!pocinjeVelikoPrezime()) {
		alert("Prezime pocinje velikim slovom!");
		return false;
	} else if(!pocinjeVelikoCrta()) {
		alert("Ime/prezime nakon \'-\' pocinje velikim slovom!");
		return false;
	} else if(!proveriDatum()) {
		alert("Datum nije odabran!");
		return false;
	} else if(!duzinaJMBG()) {
		alert("JMBG ima 13 cifara!");
		return false;
	} else if(!cifreJMBG()) {
		alert("JMBG sadrzi samo cifre!");
		return false;
	} else if(!ispravnaGodina()) {
		alert("Godina nije dobro uneta!");
		return false;
	} else if(!ispravanMesec()) {
		alert("Godina ima 12 meseci!");
		return false;
	} else if(!ispravanDatumJMBG31()) {
		alert("Mesec ima 31 dan!");
		return false;
	} else if(!ispravanDatumJMBG30()) {
		alert("Mesec ima 30 dana!");
		return false;
	} else if(!ispravanFebruar()) {
		var g = getJMBGPunaGodina();
		if (prestupna(g))
			alert("Godina je prestupna, februar ima 29 dana!");
		else
			alert("Godina nije prestupna, februar ima 28 dana!");    
		return false;
	} else if(!ispravanPol()) {
		alert("Pol u JMBG-u se ne podudara sa titulom!");
		return false;
	} else {	
		return true;  
	}
}

function postaviMaxDatumRodjenja() {
    var today = new Date();
	var dd = today.getDate();    
	var mm = today.getMonth() + 1; //Januar je 0!    
	var yyyy = today.getFullYear();
	if(dd < 10) {
		dd = '0' + dd;
	} 
	if(mm < 10) {
		mm = '0' + mm;
	}
	today = yyyy + '-' + mm + '-' + dd;
	document.getElementById("datumrodjenja").max = today;
}

function odabranaTitula() {
	var titula = document.getElementsByName("titula");
	for (var i = 0; i < titula.length; i++) {       
		if (titula[i].checked) {
			return true;
		}
	}
	return false;
}

function postojiImePrezime() {
	return document.getElementById("imeprezime").value.length > 0;
}

function duzinaImePrezime() {
	return document.getElementById("imeprezime").value.length > 6;
}

function slovaImePrezime() {
    var str = document.getElementById("imeprezime").value;
    
    for (var i = 0; i < str.length; i++) {
    	var ch = str[i];
    	if(!(('a' <= ch && ch <= 'z') || ('A' <= ch && ch <= 'Z') || ch == ' ' || ch == '-'))
        	return false;
    }
    return true;
}

function pocinjeVelikoIme() {
    var str = document.getElementById("imeprezime").value;
    return 'A' <= str[0] && str[0] <= 'Z';
}

function imaImePrezime() {
	var str = document.getElementById("imeprezime").value.trim();
	return str.indexOf(' ') != -1;
}

function pocinjeVelikoPrezime() {
    var str = document.getElementById("imeprezime").value.trim();
    var razmak = str.indexOf(' ');
    if(!('A' <= str[razmak+1] && str[razmak+1] <= 'Z'))
       return false;
    var razmak2 = str.indexOf(' ', razmak+1);
    if (razmak2 != -1 && (!('A' <= str[razmak2+1] && str[razmak2+1] <= 'Z')))
       return false;
    return true;
}

function pocinjeVelikoCrta() {
    var str = document.getElementById("imeprezime").value.trim();
    var crta = str.indexOf('-');
    if(!('A' <= str[crta+1] && str[crta+1] <= 'Z'))
       return false;
    var crta2 = str.indexOf('-', crta+1);
    if(crta2 != -1 && (!('A'<= str[crta2+1] && str[crta2+1] <= 'Z')))
       return false;
    return true;
}

function proveriDatum() {
	var datum = document.getElementById("datumrodjenja").value;
	return Date.parse(datum);
}

function duzinaJMBG() {
	return document.getElementById("jmbg").value.length == 13;	
}

function cifreJMBG() {
	var jmbg = document.getElementById("jmbg").value;
	for(var i = 0; i < jmbg.length; i++) {
		if(!('0' <= jmbg[i] && jmbg[i] <= '9'))
			return false;
	}
	return true;
}

function ispravnaGodina() {
	var year = getJMBGGodina();
	return 899 <= year && year <= 999 || 0 <= year && year <= 20;
}

function ispravanMesec() {    
	var mm = getJMBGMesec();
	return mm >= 1 && mm <= 12;  
}

function ispravanDatumJMBG31() {
	var dd = getJMBGDan();
	var mm = getJMBGMesec();
	if (mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12) 
		return dd <= 31;
	return true;
}

function ispravanDatumJMBG30() {
	var dd = getJMBGDan();
	var mm = getJMBGMesec();
	if (mm == 4 || mm == 6 || mm == 9 || mm == 11)
		return dd <= 30;
	return true;
}

function ispravanFebruar() {
	var dd = getJMBGDan();
	var mm = getJMBGMesec();
	var year = getJMBGPunaGodina();

	if (mm == 2) {
		if (prestupna(year))
			return dd <= 29;
		else
			return dd <= 28;
	}
	return true;  
}

function ispravanPol() {
	var pol = document.getElementById("jmbg").value.substring(9,10);
	var titula = document.getElementsByName("titula");

	for (var i = 0; i < titula.length; i++) {       
		if (titula[i].checked) {
			if (0 <= pol && pol <= 4 && titula[i].value == "gdin")
				return true;
			if (5 <= pol && pol <= 9 && (titula[i].value == "gdjica" || titula[i].value == "gdja"))
				return true;
			break;
		}
	}
	return false;
}

function resetFunc() {
	document.getElementById("forma").reset();
}

function getJMBGDan() {
	return parseInt(document.getElementById("jmbg").value.substring(0,2));
}

function getJMBGMesec() {
	return parseInt(document.getElementById("jmbg").value.substring(2,4));
}

function getJMBGGodina() {
	return parseInt(document.getElementById("jmbg").value.substring(4,7));
}

function getJMBGPunaGodina() {
	var year = getJMBGGodina();
	if(0 <= year && year <= 20) 
		year = year + 2000;
	else if(899 <= year && year <= 999)
		year = year + 1000;
	return year;
}

function prestupna(g) {
	return g % 400 == 0 || g % 100 != 0 && g % 4 == 0;
}
