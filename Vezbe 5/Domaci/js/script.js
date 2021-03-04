var container;
var container2;

var counter;

function addSquares() {
	container = document.getElementById("toSelect");
	container2 = document.getElementById("moved"); 
	
	for (let i = 0, counter = 1; i <= 5; i++, counter++) {
		var square = document.createElement("div");
		square.setAttribute("class", "square");
		square.innerHTML = counter;
		square.onclick = paint;
		container.appendChild(square);
	}
}

function paint() {
	this.classList.add("selected");
}

function moveButton() {
	let squares = container.querySelectorAll("div");
	
	for (let s of squares) { // prolazi kroz sve div elemente unutar diva koji ciji je id: toSelect
		if (s.classList.contains("selected")) { // Ako kvadrat ima klasu selected:
			container2.appendChild(s); // smesta ga u div ciji je id: moved
		}
	}
}


function resetButton() {
	let BlackSquares = container.querySelectorAll("div");
	for (let bs of BlackSquares) {
		container.removeChild(bs); // brise kvadrate iz prvog diva
	}
	let GreenSquares = container2.querySelectorAll("div");
	for (let gs of GreenSquares) {
		container2.removeChild(gs); // brise kvadrate iz drugog diva
	}
	counter = 0;
}
