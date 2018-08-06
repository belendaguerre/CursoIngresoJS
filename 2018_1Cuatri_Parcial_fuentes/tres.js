function mostrar()
{
	var precio, descuento, precioFinal;

	precio=parseInt(prompt("Ingrese el precio"));
	descuento=parseInt(prompt("Ingrese el porcentaje de descuento"));

	descuento = (descuento * precio) / 100;
	precioFinal=precio-descuento;

	document.getElementById("elPrecioFinal").value = elPrecioFinal;
}
