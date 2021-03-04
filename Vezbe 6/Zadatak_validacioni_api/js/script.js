// Uradimo inicijalizaciju. Za svako polje iz forme "zakacimo" sta se desava ako nije dobar unos i sta se desava prilikom unosa inace.
function initialize() {
	item1 = document.getElementById("item1");
	item2 = document.getElementById("item2");
	item3 = document.getElementById("item3");

	var nameInput = document.getElementById("name");
	nameInput.oninvalid = invalidName;
	nameInput.oninput = invalidName;

	var streetInput = document.getElementById("street");
	streetInput.oninvalid = invalidStreet;
	streetInput.oninput = invalidStreet;

	var streetNumInput = document.getElementById("street-num");
	streetNumInput.oninvalid = invalidStreetNum;
	streetNumInput.oninput = invalidStreetNum;

	var zipInput = document.getElementById("zip");
	zipInput.oninvalid = invalidZip;
	zipInput.oninput = invalidZip;

	var cityInput = document.getElementById("city");
	cityInput.oninvalid = invalidCity;
	cityInput.oninput = invalidCity;

	var countryInput = document.getElementById("country");
	countryInput.oninvalid = invalidCountry;
	countryInput.oninput = invalidCountry;

	var commentInput = document.getElementById("comment");
	commentInput.oninvalid = invalidComment;
	commentInput.oninput = invalidComment;
}

// Naredne funkcije proveravaju svaku stavku iz forme ponaosob
function invalidName() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti ime.");
	}
}

function invalidStreet() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti ulicu.");
	}
}

function invalidStreetNum() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti broj ulice.");
	} else if (this.validity.rangeUnderflow) {
		this.setCustomValidity("Broj ulice mora biti veći ili jednak broju 1.")
	}
}

function invalidZip() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti poštanski broj.");
	} else if (this.validity.patternMismatch) {
		this.setCustomValidity("Poštanski broj treba da se sastoji od pet cifara.");
	}
}

function invalidCity() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti grad.");
	}
}

function invalidCountry() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate odabrati državu.");
	}
}

function invalidComment() {
	this.setCustomValidity("");
	if (this.validity.tooLong) {
		this.setCustomValidity("Komentar mora biti manji od 200 karaktera.");
	}
}

// Provera da li je odabran barem jedan "item" koji zelimo da kupimo.
function validate() {
	var price = 0;

	if (item1.checked)
		price += 4800;

	if (item2.checked)
		price += 3200;

	if (item3.checked)
		price += 4500;

	if (price == 0) {
		alert("Morate odabrati bar jedan proizvod.");
		return false;
	}

	alert("Hvala na porudžbini. Ukupna cena koju ćete morati da plaćate po uzeću je " + price + ".");
	return true;
}
