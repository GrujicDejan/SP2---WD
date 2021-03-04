
// Postavljamo brojac da znamo koji je sledeci clan niza na redu za prikazivanje.
var currentFunFact = 0;
var funFacts = ["SWYgeW91IHdlcmUgdG8gc3BlbGwgb3V0IG51bWJlcnMgZnJvbSBvbmU7IHlvdSB3b3VsZCBub3QgZmluZCB0aGUgbGV0dGVyICdBJyB1bnRpbCB5b3UgcmVhY2ggJ29uZSB0aG91c2FuZCcu",
				"SWYgeW91IHR5cGUgImRvIGEgYmFycmVsIHJvbGwiIGludG8geW91ciBHb29nbGUgc2VhcmNoLCB0aGUgd2hvbGUgcGFnZSB3aWxsIHNwaW4u",
				"V2hpbGUgc2l0dGluZywgbGlmdCB5b3VyIHJpZ2h0IGZvb3Qgb2ZmIHRoZSBmbG9vciBhbmQgbWFrZSBjbG9ja3dpc2UgY2lyY2xlcy4gVGhlbiBkcmF3IGFudGljbG9ja3dpc2UgY2lyY2xlcyBpbiB0aGUgYWlyIHdpdGggeW91ciByaWdodCBoYW5kLiBZb3VyIGZvb3Qgd2lsbCBjaGFuZ2UgZGlyZWN0aW9u",
				"SWYgeW91IHdlcmUgdG8gYmUgcGFpZCAkNTAwIGluIHBlbm5pZXMsIHlvdSB3b3VsZCBhY3R1YWxseSBoYXZlIGVub3VnaCBtZXRhbCB0byBiZSBtZWx0ZWQgZG93biBhbmQgc29sZCBmb3Igb3ZlciAkMSwwMDAu",
				"OTAlIHBlb3BsZSB0eXBlIHRoaW5ncyBpbnRvIEdvb2dsZSB0byBzZWUgaWYgdGhleSBzcGVsbGVkIHRoZW0gY29ycmVjdGx5Lg==",
				"QWRkaW5nICJidXQgeW91IGFyZSBmcmVlIHRvIHJlZnVzZSIgYWZ0ZXIgYSB2ZXJiYWwgcmVxdWVzdCBjYW4gZG91YmxlIHlvdXIgY2hhbmNlcyBvZiBnZXR0aW5nIHdoYXQgeW91IHdhbnQu",
				"SW4gU291dGggQ2Fyb2xpbmEsIHRoZSBtYXhpbXVtIHNlbnRlbmNlIGZvciBiZWF0aW5nIHlvdXIgZG9nIGlzIGxvbmdlciB0aGFuIHRoZSBtYXggc2VudGVuY2UgZm9yIGJlYXRpbmcgeW91ciB3aWZlLg==",
				"VGhlcmUgYXJlIG9ubHkgcm91Z2hseSAyMzAwMCBBZnJpY2FuIGxpb25zIGxlZnQuIFRoZXJlIHdlcmUgcm91Z2hseSAzMDAsMDAwIGluIDE5OTgu",
				"QWxsIHRoZSBBbWVyaWNhbiBmbGFncyBwbGFjZWQgb24gdGhlIG1vb24gYXJlIG5vdyB3aGl0ZSBkdWUgdG8gcmFkaWF0aW9uIGZyb20gdGhlIHN1bi4=",
				"U3Vuc2V0IG9uIE1hcnMgaXMgYmx1ZS4=",
				"RXZlcnkgY2hhcmFjdGVyIHlvdSBraWxsIGluIEFzc2Fzc2luJ3MgQ3JlZWQgd2FzIGEgcmVhbCBwZXJzb24gYW5kIHRoZSBkYXRlIGFuZCBsb2NhdGlvbiBvZiB0aGVpciBkZWF0aCB3YXMgYWNjdXJhdGUu",
				"QnJvd24gZXllcyBhcmUgYWN0dWFsbHkgYmx1ZSB1bmRlcm5lYXRoLCBhbmQgYXMgYSByZXN1bHQgdGhlcmUgZXhpc3RzIGxhc2VyIHN1cmdlcnkgdG8gdHVybiBicm93biBleWVzIGJsdWUu",
				"MTUgbWludXRlcyBvZiBsYXVnaGVyIGVxdWFscyB0aGUgYmVuZWZpdCBvZiAyIGhvdXJzIHNsZWVwLg=="
				];

function showFunFact() {
	// Proveravamo da smo prikazali sve clanove niza.
	if (currentFunFact >= funFacts.length) {
		alert("You reached the end! :( In order to see quotes again click on reset button.");
		return;
	}
	// Ovim dobavljamo '<p id="fun-fact"></p>' iz index.html, a sa innerHTML smestamo dati tekst u taj paragraf.
	var container = document.getElementById("fun-fact");
	// Mala pomoc oko atob funkcije -> https://www.base64decode.net/javascript-atob.
	container.innerHTML = atob(funFacts[currentFunFact]);
	currentFunFact++; // Povecavamo brojac kako bi sledeci put kada korisnik pritisne "Show another fun fact!", dobili sledeci u nizu.
}

// reset funkcija postavlja sve na pocetne vrednosti.
function reset() {
	currentFunFact = 0;
	var container = document.getElementById("fun-fact");
	container.innerHTML = "";
	console.log("Counter has been reset.");
}
