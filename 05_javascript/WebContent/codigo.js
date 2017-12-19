var nombre = "Juan";

function variables() {
	console.log('Llamada a funcion variable');
	
	var numero = 4;
	console.log('El numero es ' + numero);
	numero = 6;
	console.log('El numero es ' + numero);
	console.log('Te llamas ' + nombre);
	if (numero >= 3) {
		  var solucion = "OK";
		}
	console.log(solucion);
	var mensaje = "En un \n lugar de la  \"Mancha\"";
	window.alert(mensaje);
}