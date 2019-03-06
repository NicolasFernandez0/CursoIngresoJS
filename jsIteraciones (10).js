function mostrar()
{
	var numero;
	var negativos = 0;
	var positivos = 0; 
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	
	var contador = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	
	var respuesta = true;


	while(respuesta == true)
	{
		contador++;

		numero = prompt("Ingrese un numero " +contador+ ": ");

		numero = parseInt(numero);

		if (numero == 0) 
		{
			contadorCeros++;
		}
		
		else
		{
			if (numero < 0)
			{
				contadorNegativos++;

				negativos = (negativos + numero);

				promedioNegativos = (negativos / contadorNegativos);
			}
				
			else
			{
				contadorPositivos++;

				positivos = (positivos + numero);

				promedioPositivos = (positivos / contadorPositivos);

				if (numero % 2 == 0)
				{
					contadorPares++;
				}
			}		
		}

		diferencia = (positivos + negativos);

		respuesta = confirm("¿Quiere ingresar otro numero?");
	}

	document.write("<br> La suma de los negativos es: " +negativos);
	document.write("<br> La suma de los positivos es: " +positivos);
	document.write("<br> La cantidad de positivos es: " +contadorPositivos);
	document.write("<br> La cantidad de negativos es: " +contadorNegativos);
	document.write("<br> La cantidad de ceros es: " +contadorCeros);
	document.write("<br> La cantidad de numeros pares es: " +contadorPares);
	document.write("<br> El promedio de positivos es: " +promedioPositivos);
	document.write("<br> El promedio de negativos es: " +promedioNegativos);
	document.write("<br> La diferencia entre positivos y negativos es: " +diferencia);
}
/*
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/