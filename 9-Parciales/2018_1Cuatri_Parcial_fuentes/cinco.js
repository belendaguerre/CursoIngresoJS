function mostrar()
{
	var planeta;
	planeta = prompt ("Ingrese planeta");
	switch (planeta)
	{
		case "tierra":
		{
			alert ("Acá vivimos");
			break;
		}
		case "mercurio":
		case "venus":
		{
			alert ("Acá hace más calor");
			break;
		}
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
		{
			alert ("Acá hace más frío");
			break;
		}
		default:
		{
			alert ("No es un planeta válido");
			break;
		}
	}
}
