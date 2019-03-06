function mostrar()
{
	var edad;

	edad = document.getElementById('edad').value;

	edad = parseInt(edad);

	if (edad > 12 && edad <18)
	{
		alert("Usted es adolecente.");
	}

	else
	{
		alert("Usted no es adolecente.");
	}
}