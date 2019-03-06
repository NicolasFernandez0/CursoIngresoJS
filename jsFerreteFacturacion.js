/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var mensaje;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById('PrecioDos').value;
	precioTres = document.getElementById('PrecioTres').value;

	precioUno = parseInt(precioUno);
	precioDos =	parseInt(precioDos);
	precioTres = parseInt(precioTres);

	suma = (precioUno + precioDos + precioTres);

	mensaje = "La suma es: " + suma;

	alert(mensaje);
}


function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;
	var mensaje;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById('PrecioDos').value;
	precioTres = document.getElementById('PrecioTres').value;

	precioUno = parseInt(precioUno);
	precioDos =	parseInt(precioDos);
	precioTres = parseInt(precioTres);

	promedio = ((precioUno + precioDos + precioTres) / 3);

	mensaje = "El promedio es: " +promedio;

	alert(mensaje);	
}


function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var precioFinal;
	var precioConIva;
	var mensaje;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById('PrecioDos').value;
	precioTres = document.getElementById('PrecioTres').value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	suma = (precioUno + precioDos + precioTres);

	precioConIva = (suma * 21 / 100);

	precioFinal = (suma + precioConIva);

	mensaje = "El Precio Final  es: $" +precioFinal;

	alert(mensaje);
}