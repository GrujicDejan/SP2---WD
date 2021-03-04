var mainImage;   // Globalna promenljiva u kojoj ce se nalaziti HTML element id-a "slika".
var scale = 1;   // Globalna promenljiva u kojoj ce se nalaziti trenutni nivo zuma, tj. koja govori o tome koliko puta je slika zumirana.
				 // Tako recimo vrednost 1 znaci da slika nije zumirana, a recimo vrednost 2 da je duplo uvecana.
var leftPos = 0; // Globalna promenljiva u kojoj ce se cuvati vrednost "left" CSS property-ja koji se odnosi na relativno pozicioniranje slike.

// Funkcija koja se poziva pri ucitavanju stranice. U njoj vrsimo svu potrebnu inicijalizaciju.
function initialize() {
	mainImage = document.getElementById("slika"); // Inicijalizujemo globalnu promenljivu mainImage.
	initializeLinks(); // Pozivamo funckiju koja ce izvrsiti inicijalizaciju linkova.
}

// U HTML stranici unutar elementa ID-a "links" se nalaze prazni "a" elementi koji vode do odgovarajucih slika.
// Unutar ove funkcije potrebno je prazne linkove popuniti, tako sto cemo unutar svakog linka dodati po jednu sliku, tj. "img" element.
// Dodati "img" elementi treba da prikazuju one slike na koje linkovi vode, odnosno slike iz "href" atributa linkova.
// Pored toga potrebno je malo promeniti ponasanje linkova. Defoltno ponasanje je da se klikom na link otvara resurs koji se
// nalazi u "href" atributu linka, sto je u nasem slucaju slika. Medjutim, mi ne zelimo da se klikom na dugme otvori slika, vec
// zelimo da se ta slika prikaze u elementu koji se nalazi u promenljivoj "mainImage". Implementacija prikaza slike u elementu iz
// promenljive "mainImage" je odradjena u funkciji "showImage", a ovde je potrebno samo dodati "onclick" event na linkove, tako da
// klik na link inicira izvrsavanje funkcije showImage.
function initializeLinks() {
	var links = document.getElementById("links"); // Da bismo uopste dosli do linkova, prvo moramo dobaviti element ID-a "links" u kom
												  // se linkovi i nalaze.
	for (var i = 0; i < links.children.length; i++) { // U ovoj for petlji prolazimo kroz svu "decu" elementa ID-a "links".
													  // Deca ovog elementa su upravo linkovi koji su nam potrebni.
		var link = links.children[i]; // Uzimamo i-to dete, tj. i-ti link.
		link.onclick = showImage; // Govorimo JS-u da na klik linka treba da izvrsi funkciju "showImage".
		var img = document.createElement("img"); // Posto u link treba da ubacimo sliku, tj. "img" element, ovde taj "img" element kreiramo.
		img.setAttribute("src", link.getAttribute("href")); // Potom novokreiranoj slici postavljamo "src" atribut. Kao sto je receno
															// u opisu iznad ove funkcije, slika koja treba da se prikaze unutar linkova
															// jeste upravo ona slika na koju link vodi. Tako da "src" atribut novokreirane
															// slike treba da bude jednak "href" atributu linka.
		link.appendChild(img); // Nakon sto smo kreirali i ispodesavali novi "img" element, dodajemo ga u tekuci link.
	}
}

// Funkcija koja brise CSS klase svih linkova. Nakon izvrsavanja ove funkcije nijedan link nema CSS klasu.
function resetClassNames() {
	var links = document.getElementById("links"); // Dobavljamo element koji sadrzi linkove.
	for (var i = 0; i < links.children.length; i++) { // Slicno kao u funkciji iznad, prolazimo kroz linkove, jedan po jedan.
		var link = links.children[i]; // Uzimamo tekuci, tj. i-ti link.
		link.className = ""; // Postavljanjem "className" na prazan string smo uklonili sve klase koje je element potencijalno imao.
	}
}

// Funkcija koja se okida na klik linka, a koja za cilj ima da sliku na koju link pokazuje, prikaze u "mainImage" elementu.
// Defoltno ponasanje browser-a je da na klik na link otvara resurs na koji link pokazuje, pa bi se u ovom slucaju na klik linka otvorila
// slika. Medjutim ovo ponasanje treba spreciti, tj. slika treba da se prikaze u "mainImage" elementu, ne treba da se otvori.
function showImage(event) {
	resetClassNames(); // Klasu "selected" treba da ima onaj link cija je slika trenutno prikazana u "mainImage" elementu.
					   // Pre stavljanja ove klase na kliknuti link, treba da sklonimo tu klasu sa prethodno kliknutog linka. To onda
					   // postizemo tako sto sklonimo sve klase sa svih linkova, i time smo sigurni da ce i klasa "selected" biti uklonjena.
	this.className = "selected"; // Stavljamo klasu "selected" na kliknuti link.
	mainImage.setAttribute("src", this.getAttribute("href")); // Atribut "src" elementa "mainImage" menjamo tako da postane jednak "href"
															  // atributu kliknutog linka. A kako se u "href" atributu linka nalazi putanja
															  // ka slici, postavljanjem "src" atributa na tu putanju, unutar elementa
															  // "mainImage" ce se prikazati slika iz linka na koji se kliknulo.
	event.preventDefault(); // Na ovaj nacin sprecavamo defoltno ponasanje browser-a, kojim bi se slika iz linka otvorila zasebno.
	scale = 1; // Nakon promene slike treba da vratimo zoom nivo na 1, da novoprikazana slika ne bi bila zumirana.
	setScale(); // Kako smo u liniji iznad promenili vrednost "scale" globalne promenljive, potrebno je pozvati funkciju "setScale", koja onda
				// uzima vrednost promenljive "scale" i integrise je u CSS.
	leftPos = 0; // Nakon promene slike treba da vratimo sliku u inicijalnu poziciju.
	setPosition(); // Kako smo u liniji iznad promenili vrednost "leftPos" globalne promenljive, potrebno je pozvati funkciju "setPosition"
				   // koja onda uzima vrednost promenljive "leftPos" i integrise je u CSS.
}

// Funkcija koja smanjuje zoom nivo za 0.2.
function zoomOut() {
	scale -= 0.2; // Umanjujemo tekuci zoom nivo za 0.2.
	if (scale < 1) // Ne zelimo da dozvolimo da slika bude manja od originalne velicine. Zato proveravamo da li je zoom nivo manji od 1, ako jeste
				   // vracamo ga na 1.
		scale = 1;
	setScale(); // Kako smo promenili vrednost "scale" promenljive, potrebno je pozvati "setScale" da bi se ta nova vrednost integrisala u CSS.
}

// Funkcija koja uvecava zoom nivo za 0.2.
function zoomIn() {
	scale += 0.2; // Uvecavamo tekuci zoom nivo za 0.2.
	setScale(); // Kako smo promenili vrednost "scale" promenljive, potrebno je pozvati "setScale" da bi se ta nova vrednost integrisala u CSS.
}

// Funkcija koja pomera sliku za 30 piksela ulevo.
function moveLeft() {
	leftPos -= 30; // Umanjujemo "leftPos" za 30 piksela, i time postizemo da se slika pomeri ulevo za 30 piksela. (Ako nije jasno zasto se ovim
				   // umanjivanjem slika pomera ulevo, podsetiti se relativnog pozicioniranja iz CSS dela).
	setPosition(); // Kako smo promenili vrednost "leftPos" promenljive, potrebno je pozvati "setPosition" da bi se ta nova vrednost integrisala u CSS.
}

// Funkcija koja pomera sliku za 30 piksela udesno.
function moveRight() {
	leftPos += 30; // Uvecavamo "leftPos" za 30 piksela, i time postizemo da se slika pomeri udesno za 30 piksela. (Ako nije jasno zasto se ovim
				   // uvecavanjem slika pomera udesno, podsetiti se relativnog pozicioniranja iz CSS dela).
	setPosition();
}

// Funkcija koja integrise vrednost iz promenljive "scale" u CSS.
function setScale() {
	mainImage.style.transform = "scale(" + scale + ")";
}

// Funkcija koja integrise vrednost iz promenljive "leftPos" u CSS.
function setPosition() {
	mainImage.style.left = leftPos + "px";
}
