function mostrar()
{
	var numeroRadom;
	var mensaje;

	numeroRadom = Math.floor((Math.random() * 10) + 1);

	if (numeroRadom >= 9)
	{
		mensaje = " EXCELENTE";
	}
	
	else if (numeroRadom > 3)
	{
		mensaje = " APROBO";
	}
	else if (numeroRadom < 4)
	{
		mensaje = " Vamos, proxima se puede";
	}

	alert(numeroRadom + mensaje);
}

/*
Al presionar el , asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBO" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/