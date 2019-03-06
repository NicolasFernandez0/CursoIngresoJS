function mostrar()
{
	var edad;
	var mensaje;

	edad = document.getElementById('edad').value;

	edad = parseInt(edad);

	if (edad > 17)
	{
		mensaje = "Es mayor de edad.";
	}

	else if (edad > 12 && edad < 17)
	{
		mensaje = "Es adolecente.";
	}

	else
	{
		mensaje = "Es un niño.";
	}

	alert(mensaje);
}