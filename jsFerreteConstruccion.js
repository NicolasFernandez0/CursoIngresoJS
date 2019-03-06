/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var rectanguloDeAlambre;

	largo = document.getElementById('Largo').value;

	largo =  parseInt(largo);

	ancho = document.getElementById('Ancho').value;

	ancho =  parseInt(ancho);

	perimetro = (2 * (largo + ancho));

	rectanguloDeAlambre = (perimetro * 3);

	alert("La cantidad de alambre a comprar es: " +rectanguloDeAlambre);
}


function Circulo () 
{
	var largo;
	var ancho;
	var radio;
	var CirculoDeAlambre;

	largo = document.getElementById('Largo').value;

	largo =  parseInt(largo);

	ancho = document.getElementById('Ancho').value;

	ancho =  parseInt(ancho);

	radio = document.getElementById('Radio').value;

	radio =  parseInt(radio);

	radio = 3.14;

	CirculoDeAlambre = (radio * 3);

	alert("La cantidad de alambre a comprar si se ingresa el radio es: " +CirculoDeAlambre);
}


function Materiales () 
{	
	var largo;
	var ancho;
	var bolsasCemento;
	var bolsasCal;
	var area;

	largo = document.getElementById('Largo').value;

	largo =  parseInt(largo);

	ancho = document.getElementById('Ancho').value;

	ancho =  parseInt(ancho);

	area = (ancho * largo);

	bolsasCemento = (2 * area);
	
	bolsasCal = (3 * area);

	alert("Se necesitan: " +bolsasCemento+ " Bolsas de cemento  y : " +bolsasCal+ " Bolsas de cal");
}