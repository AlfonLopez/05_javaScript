function calculo() {
	var uni = document.getElementById("unidad");
	var preci = document.getElementById("precio");
	
	var solucion = parseFloat(uni.value) * parseFloat(preci.value);
	window.alert("El total es: " + solucion);
}