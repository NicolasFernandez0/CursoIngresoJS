function mostrar()
{
	var clave;

	clave = prompt("Ingrese clave");

	while (clave != "utn750")
	{
		clave = prompt("La clave es incorrecta ingrese otra nuevamente.");
	}

	alert("La clave es correcta.");
}
