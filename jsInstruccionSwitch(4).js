function mostrar()
{ 
	var mesDelaño;
	var mensaje;

 	mesDelaño  = document.getElementById('mes').value;

 	switch (mesDelaño)
 	{
 		case "Febrero":

 			mensaje = "Este mes tiene 28 dias";
 	
 			break;

 		case "Abril":
 		case "Junio":
 		case "Noviembre":
 
 			mensaje = "Este mes tiene 29 dias";

 			break;

 			default:

 				mensaje = "Este mes tiene 31 dias";

 				break;
 	}

 	alert(mensaje);	
}
/*
al seleccionar un mes informar. 
si tiene 28 días. 
si tiene 30 días. 
si tiene 31 días.
*/