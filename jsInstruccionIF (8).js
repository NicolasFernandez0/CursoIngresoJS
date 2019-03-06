function mostrar()
{  
	var edad;
	var estadoCivil;
	var mensaje;

	edad =  document.getElementById('edad').value;

	edad = parseInt(edad);

	estatoCivil = document.getElementById('estadoCivil').value;

	if (edad < 18 && estatoCivil != "Soltero")
	{

	}
	else
	{
		if (edad > 18 && estatoCivil == "Soltero")
		{
			mensaje = "Es soltero y no es menor.";
		}
	}
	
	alert(mensaje);
}


/*
Al ingresar una edad menor a 18 años 
y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/