function inicijalizuj() {
	
	var imeprezime = document.getElementById("imeprezime");
	imeprezime.oninvalid = invalidImePrezime;
	imeprezime.oninput = invalidImePrezime;
	
	var datum = document.getElementById("datum");
	datum.oninvalid = invalidDatum;
	datum.oninput = invalidDatum;
	
	var email = document.getElementById("email");
	email.oninvalid = invalidEmail;
	email.oninput = invalidEmail;
	
	var telefon = document.getElementById("telefon");
	telefon.oninvalid = invalidTel;
	telefon.oninput = invalidTel;
	
	var nagrada = document.getElementById("nagrada");
	nagrada.oninvalid = invalidNagrada;
	nagrada.oninput = invalidNagrada;

}

function invalidImePrezime() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti ime !");
	}
}

function invalidDatum() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate postaviti datum !");
	}
}

function invalidEmail() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti e-mail.");
	}
}

function invalidTel() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti broj telefona.");
	}
}

function invalidNagrada() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate odabrati nagradu.");
	}
}

function provera() {
	if(!odabranPol()) {
		alert("Odaberite titulu!");
		return false;
	} else if(!duzinaImePrezime()) {
		alert("Ime i prezime moraju zajedno da imaju 6+ karaktera!");
		return false;
	} else if(!samoSlova()) {
		alert("Ime i prezime sadrzi samo slova i \'-\'!");
		return false;
	} else if(!pocinjeVelikimSlovomIme()) {
		alert("Početno slovo imena mora biti veliko!");
		return false;
	} else if(!imaPrezime()) {
		alert("Mora sadržati prezime!");
		return false;
	} else if(!pocinjeVelikimSlovomPrezime()) {
		alert("Početno slovo prezimena mora biti veliko!");
		return false;
	} if (!proveriZnakove()) {
		alert("E-mail mora biti sačinjen od odgovarajućih znakova.");
		return false;
	} if(!postojiEt()) {
		alert("E-mail mora da imati znak @.");
		return false;
	} if(!proveriGmail()) {
		alert("E-mail mora bit gmail.");
		return false;
	} if(!proveriDaLiSuCifre()) {
		alert("Broj telefona mora sadžati samo cifre od 0 do 9 !");
		return false;
	} if(!duzinaBroja()) {
		alert("Broj mora biti duzine od 8 do 12 karaktera !");
		return false;
	} if(!proveriPrve2cifre()) {
		alert("Prve dve cifre broja moraju biti 06 !");
		return false;
	} 
	
	
}

function odabranPol() {
	var pol = document.getElementsByName("pol");
	for (var i = 0; i < pol.length; i++) {       
		if (pol[i].checked) {
			return true;
		}
	}
	return false;
}

function duzinaImePrezime() {
	return document.getElementById("imeprezime").value.length > 6;
}

function samoSlova() {
    var unos = document.getElementById("imeprezime").value;
    
    for (var i = 0; i < unos.length; i++) {
    	var znak = unos[i];
    	if(!(('a' <= znak && znak <= 'z') || ('A' <= znak && znak <= 'Z') || znak == ' '))
        	return false;
    }
    return true;
}

function pocinjeVelikimSlovomIme() {
    var ime = document.getElementById("imeprezime").value;
    return 'A' <= ime[0] && ime[0] <= 'Z';
}

function imaPrezime() {
	var imep = document.getElementById("imeprezime").value.trim();
	return imep.indexOf(' ') != -1;
}

function pocinjeVelikimSlovomPrezime() {
    var prezime = document.getElementById("imeprezime").value.trim();
    var razmak = prezime.indexOf(' ');
    if(!('A' <= prezime[razmak+1] && prezime[razmak+1] <= 'Z'))
       return false;
    var razmak2 = prezime.indexOf(" ", razmak+1);
    if (razmak2 != -1 && (!('A' <= prezime[razmak2+1] && prezime[razmak2+1] <= 'Z')))
       return false;
    return true;
}

function postojiEt() {
	var mail = document.getElementById("email").value.trim();
	return mail.indexOf('@') != -1;
}

function proveriGmail() {
	var mail = document.getElementById("email").value.trim();
	var br = mail.indexOf('@');
	
	if (mail[br+1] != 'g' && mail[br+2] != 'm' && mail[br+3] != 'i' && mail[br+4] != 'l' && mail[br+5] != '.' && mail[br+1] != 'c' && mail[br+1] != 'o' && mail[br+1] != 'm')
		return false;
	return true;
	
}

function proveriZnakove() {
	var mail = document.getElementById("email").value.trim();
	var sviKarakteri = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	if(mail.match(sviKarakteri)) {
		return true;
	}
	return false;
}

function proveriDaLiSuCifre() {
	var mobilni = document.getElementById("telefon").value;
	for (var i = 0; i < mobilni.length; i++) {
		if (!(mobilni[i] >= '0' && mobilni[i] <= '9'))
			return false;	
	}
	return true;
}

function duzinaBroja() {
	var mobilni = document.getElementById("telefon").value;
	if (mobilni.length < 8 || mobilni.length > 12)
		return false;
	return true;
}

function proveriPrve2cifre() {
	var mobilni = document.getElementById("telefon").value;
	if (mobilni[0] == '0' && mobilni[1] == '6') 
		return true;
	return false;
}

function animacija() {
  var judoka = document.getElementById("judoka");   
  var br = 750;
  setInterval(pomeri, 10);
  function pomeri() {
   if (br == 1501) {
	   br = 750;
    } else {
      br++; 
      judoka.style.left = br + "px"; 
    }
  }
}

function animacija2() {
  var judoka = document.getElementById("judoka2");   
  var br = 0;
  setInterval(pomeri, 10);
  function pomeri() {
   if (br == 0) {
	   br = 750;
    } else {
      br--; 
      judoka.style.left = br + "px"; 
    }
  }
}

function uvecaj() {
	var slika = document.getElementById("centriraj");
	
	slika.setAttribute("class", "uvecaj");
	
}

function darkMode() {
	document.getElementById("pozadina").style.backgroundColor = "black";
	document.getElementById("pozadina").style.color = "white";
	document.getElementById("body-pozadina").style.backgroundColor = "black";
	document.getElementById("body-pozadina").style.color = "white";
}

function normallMode() {
	document.getElementById("pozadina").style.backgroundColor = "white";
	document.getElementById("pozadina").style.color = "black";
	document.getElementById("body-pozadina").style.backgroundColor = "white";
	document.getElementById("body-pozadina").style.color = "black";
}

/*
function uvecaj() {
    document.getElementById("").addEventListener("mouseover", f1);
	document.getElementById("").addEventListener("mouseout", f2);
}*/

function rasiriSliku() {
	var element = document.getElementById("centriraj");
	element.classList.add("uvecaj");
}










