function mostrar()
{
	var dia;
	dia=prompt("Ingrese dia");
	switch (dia)
	{
		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
		{
			alert("A trabajar");
			break;
		}
		case "Sabado":
		case "Domingo":
		{
			alert("Buen finde");
			break;
		}
		default:
		{
			alert("El dato ingresado es invalido");
			break;
		}
	}

}
