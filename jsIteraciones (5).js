function mostrar()
{
	var sexo;

	sexo = prompt("Ingrese su sexo: f o m");

	while (sexo != "f" && sexo != "m")
	{
		sexo = prompt("El sexo ingresado es incorrecto, Ingrese su sexo: f o m nuevamente");
	}

	alert("Su sexo es correcto");
}