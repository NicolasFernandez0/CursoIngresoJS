function mostrar()
{ 
	var mesDelAño;

	mesDelAño = document.getElementById('mes').value; 

	switch (mesDelAño)
	{
		case "Junio":
		case "Julio":
		case "Agosto":

		mensaje = "Abrigate que hacer frio.";
		
		case "Marzo":
		case "Abril":
		case "Mayo":

		mensaje = "Ya pasamos el frio, ahora calor!!!.";

		break;

		default:
			
			mensaje = "Falta para el invierno.";

			break;
	} 

	alert(mensaje);
}

/*
al seleccionar un mes informar. 
si estamos en Invierno: "Abrigate que hace frio." 
si aún no llego el Invierno: "Falta para el invierno." 
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/