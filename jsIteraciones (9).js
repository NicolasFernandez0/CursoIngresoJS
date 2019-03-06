function mostrar()
{
	var numero;
	var bandera = true;
	var numeroMaximo = 0;
	var numeroMinimo= 0;
	var contador = 0;
	var respuesta = true;

	while(respuesta == true)
	{
		contador++;

		numero = prompt("Ingrese un numero " +contador+ ": ")

		numero = parseInt(numero);

		if (bandera == true)
		{
			numeroMaximo = numero;
			
			numeroMinimo = numero;

			bandera = false;
		}

		else 
		{ 	
			if (numeroMaximo > numero)
			{
				numeroMaximo = numero;
			}

			if (numeroMinimo < numero) 
			{
				numeroMinimo = numero;
			}
		}

		respuesta = confirm("¿Quieres ingresar otro numero?");
	}

	document.getElementById('maximo').value = numeroMaximo;

	document.getElementById('minimo').value = numeroMinimo; 
}
/*
Al presionar el botón pedir números hasta que el usuario quiera, 
mostrar el número máximo y el número mínimo ingresado
*/