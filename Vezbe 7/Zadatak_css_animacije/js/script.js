var raindropsCount = 10; // Globalna promenljiva koja sadrzi informaciju o broju kapljica koje ce padati.
var raindropSpeed = 3;   // Globalna promenljiva koja sadrzi informaciju o brzini kojom ce kapljice padati.
var raindropsDiv;        // Globalna promenljiva koja sadrzi div element unutar kog treba stavljati kapljice.

// Funkcija koja se poziva pri ucitavanju stranice. U njoj vrsimo svu potrebnu inicijalizaciju.
function initialize() {
	raindropsDiv = document.getElementById("raindrops"); // Inicijalizujemo promenljivu "raindropsDiv"
	for (var i = 0; i < raindropsCount; i++) { // Unutar elementa "raindropsDiv" potrebno je da napravimo
											   // "img" elemente za kapljice. Broj "img" elemenata koje
											   // treba da napravimo se nalazi u promenljivoj "raindropsCount".
											   // Zato se ova petlja ponavlja "raindropsCount" puta, a unutar
											   // svake iteracije petlje, napravicemo jednu kapljicu.
		var raindrop = document.createElement("img"); // Pravimo novi "img" element koji ce predstavljati jednu
													  // kapljicu.
		raindrop.setAttribute("src", "images/raindrop.png"); // Novokreiranom "img" elementu postavljamo "src"
															 // atribut, kako bi se u njemu prikazala slika kapljice.
		raindropsDiv.appendChild(raindrop); // Novokreirani "img" element dodajemo u div za kapljice.
		resetRaindrop(i); // Pozivamo funkciju "resetRaindrop" koja ima za duznost da postavi inicijalnu vrednost kapljice.
	}
	setInterval(updateRaindrops, 10); // Funkcija "updateRaindrops" ce biti zaduzena za pomeranje svih kapljica nadole.
									  // Ova funkcija treba da se poziva na svakih 10 milisekundi i zato pozivamo setInterval
									  // kojim onda postizemo upravo to - funcija updateRaindrops ce se pozivati iznova i
									  // iznova na svakih 10 milisekundi.
}

// Ova funkcija je zaduzena da i-tu kapljicu resetuje, tj. da podesi njenu poziciju od koje ce onda krenuti da pada nadole.
function resetRaindrop(i) {
	var raindrop = raindropsDiv.children[i]; // Dobavljamo i-tu kapljicu iz "raindropsDiv" elementa.
	raindrop.style.left = (window.innerWidth/(raindropsCount-1)) * i; // Postavljamo horizontalnu poziciju kapljice. Razlozimo
																	  // ovu formulu sada na delove:
																	  // window.innerWidth - sirina prozora
																	  // window.innerWidth/(raindropsCount-1) - razmak izmedju
																	  // svake dve kapljice
																	  // Ovaj razmak onda jos dodatno mnozimo sa i zato sto
																	  // i-ta kapljica levo od sebe ima upravo i razmaka.
																	  // Slikovito (uspravne crte su kapljice, crticama je
																	  // oznacena jedinica mere, recimo jedna crtica je jedan
																	  // piksel):
																	  // |---|---|---|
																	  // U primeru iznad imamo da je sirina razmaka 3 piksela.
																	  // Nulta kapljica je onda na poziciji 0*3=0, prva kapljica
																	  // je na poziciji 1*3=3, druga kapljica na poziciji
																	  // 2*3=6, i cetvrta na poziciji 3*3=9. Vidimo da se pozicije
																	  // kapljica slazu sa brojem piksela levo od njih, sto je
																	  // upravo ono sto smo zeleli postici. Time smo kapljice
																	  // rasporedili uniformno po sirini ekrana.
	raindrop.style.top = -Math.random() * window.innerHeight; // Postavljamo vertikalnu poziciju kapljice. Naime, ne zelimo da
															  // sve kapljice krenu da padaju sa iste visine, jer bi onda to
															  // vizuelno izledalo lose - kapljice bi sve bile u jednoj liniji.
															  // Zato uzimamo random vrednost iz opsega [0,1) koju dobijamo pomocu
															  // Math.random() funkcije. Dobijenu vrednost mnozimo sa visinom
															  // ekrana (window.innerHeight) i tako dobijamo broj iz opsega (0,window.innerHeight].
															  // Na sve to dodajemo minus, da bi inicijalna vertikalna pozicija kapljice bila iznad ekrana.
															  // Dakle, kapljica se pozicionira iznad vidljivog dela ekrana, i onda padanjem
															  // dolazi u vidljivi deo.
}

// Pomeranje svih kapljica nadole.
function updateRaindrops() {
	for (var i = 0; i < raindropsDiv.children.length; i++) { // Prolazimo kroz sve kapljice.
		var raindrop = raindropsDiv.children[i]; // Uzimamo i-tu kapljicu.
		var currentTop = parseInt(raindrop.style.top); // Uzimamo trenutnu vrednost CSS property-ja "top".
		if (currentTop < window.innerHeight) { // Proveravamo da li je kapljica u vidljivom delu ekrana, tj. proveravamo da nije mozda
											   // otisla ispod donje ivice ekrana.
			raindrop.style.top = currentTop + raindropSpeed; // Ukoliko je kapljica i dalje u ekranu, pomeramo je nadole za
														     // "raindropSpeed" piksela. Primetite da ukoliko je "raindropSpeed" veci,
														     // kapljicu cemo vise pomeriti nadole, cime cemo naciniti da se kapljice
														     // brze i krecu. Otuda rec "speed" u imenu ove promenljive.
		} else {
			resetRaindrop(i); // Ukoliko je kapljica izasla iz ekrana, resetujemo njenu poziciju. Time postizemo da se kapljice ciklicno vrte.
							  // Dakle, svaki put kad kapljica ode van ekrana, mi je vratimo gore, iznad ekrana, i ona nastavi da pada.
		}
	}
}
