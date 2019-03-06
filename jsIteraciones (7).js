function mostrar()
/*
{
	var contador = 0;
	var acumulador = 0;
	var respuesta = true;
	var numero = 0;

	while (respuesta == true)
	{
		contador++;

		numero = prompt("Quieres ingresar otro numero " +contador+ ": ");

		numero = parseInt(numero);

		acumulador = (acumulador + numero);		

		respuesta = confirm("Quieres ingresar otro numero");

	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;
}
*/

{
    var contador = 0;
	var acumulador = 0;
	var respuesta = "si";
	var numero = 0;

	while (respuesta != "no")
	{
		
		if (respuesta == "si")
		{	
			contador++;

			numero = prompt("Quieres ingresar otro numero " +contador+ ": ");

			numero = parseInt(numero);

			respuesta = prompt("Quieres ingresar otro numero si/no");

			acumulador = (acumulador + numero);		
		}

		else
		{
			respuesta = prompt("La respuesta es incorrecta porfavor ingrese una respues que sea si/no");
		}

	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;
}
