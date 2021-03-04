var kontejner;
var counter = 0;

function inicijalizuj() {
	kontejner = document.getElementById("container");
}

function dodajKvadrat() {
	counter++;
	
	var kvadrat = document.createElement("div"); // Kreiramo kvadrat, tako sto cemo napraviti novi div.
	kvadrat.setAttribute("class", "kvadrat"); // Dodamo mu CSS klasu kvadrat.
	kvadrat.innerHTML = counter; // Unutar kvadrata postavljamo brojac.
	kvadrat.onclick = obrisiKvadrat; // Sta se desava prilikom klika na dati kvadrat
	
	kontejner.appendChild(kvadrat); // Dodajemo kvadrat u kontejner.
}

function obrisiKvadrat() {
	kontejner.removeChild(this); // Samo ga obrisemo, 'this' je pokazivac na samog sebe.
}
