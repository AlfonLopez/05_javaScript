function comprobar() {
	var primo = window.prompt("Dime numero primo del 1 al 10");
	
	if (primo == 1 || primo == 2 || primo == 3) {
	window.alert("Lo has conseguido");
	}
}

function viajar() {
var ciudad = window.prompt("Que ciudad quieres visitar?");

	switch (ciudad) {
	case "roma":
	case "Roma":
		window.alert("El precio del viaje a Roma es 500€");	
		break;
	case "Paris" :
	case "paris" :
	case "París" :
	case "parís" :
		window.alert("El precio del viaje a Paris es 450€");	
		break;
	case "berlin":
	case "Berlin":
		window.alert("El precio del viaje a Berlin es 387.56€");	
		break;
	default:
		window.alert("Pedir presupuesto para " + ciudad + ".");
		break;
	}
}