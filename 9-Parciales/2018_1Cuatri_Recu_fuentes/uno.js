
function mostrar()
{
	var base, altura, superficie, perimetro;

	base = prompt ("Ingrese la base");
	altura = prompt("Ingrese la altura");

	perimetro=base*3;
	superficie=(base*altura)/2;

	alert("La superficie es " +superficie+" y el perimetro "+perimetro);

}
