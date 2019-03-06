function mostrar()
{
	var numero;
	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = true;


	while (respuesta == true)
	{
		contador++;

		numero = prompt("Ingrese un numero " +contador+ ": ");

		numero = parseInt(numero);

		if (numero > 0)
		{
			positivo = (numero + positivo);
		}
		else
		{
			negativo = (numero * negativo);
		}

		respuesta = confirm("¿Quiere ingresar otro numero?");
	}
		
document.getElementById('suma').value = positivo;
document.getElementById('producto').value = negativo;
}

/*
Al presionar el botón pedir números hasta que el usuario quiera, 
sumar los que son positivos y multiplicar los negativos.
*/