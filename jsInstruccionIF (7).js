function mostrar()
{
	var edad;
	var mensaje;

	edad = document.getElementById('edad').value;

	edad = parseInt(edad);

	estadoCivil = document.getElementById('estadoCivil').value;

	if (edad < 18 && estadoCivil != "Soltero")
	{
		mensaje = "Es muy pequeño para NO ser soltero.";
	}

	alert(mensaje);
}