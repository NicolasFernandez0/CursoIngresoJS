function mostrar()
{
	var numero;

	numero = prompt("Ingrese un numero entre el 0 y 9");

	numero = parseInt(numero);

	while (numero < 0 || numero > 9)
	{
		numero = prompt("El numero ingresado es incorrecto, Ingrese un numero entre 0 y 9");
		
		numero = parseInt(numero);
	}

	alert("El numero es correcto");
}