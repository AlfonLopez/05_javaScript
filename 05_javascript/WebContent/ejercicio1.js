function muestra() {
	var ini = document.getElementById("inicio");
	var fin = document.getElementById("final");
	
	if(parseInt(ini.value)<parseInt(fin.value)){
		for (i = parseInt(ini.value); i <= parseInt(fin.value); i++) {
			console.log("El numero es: " + i);
		}
		}else{
			window.alert("Error, el numero inicial es mayor que el final")
		}
		
	
}