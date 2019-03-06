function mostrar()
{
	var laHora;
	var mensaje;

 	laHora  = document.getElementById('hora').value;

 	laHora = parseInt(laHora);

 	switch (laHora)
 	{
 		case 7: 
 		case 8:
 		case 9:
 		case 10:
 		case 11:

 			mensaje = "Es de mañana.";

 			break;
 	}

 	alert(mensaje);
}

/*
Al ingresar una hora, informar: 
si está entre las 7 y las 11 : "Es de mañana.".
*/