function mostrar()
{
	var precio, descuento, descuentoE, resultado, resultadoFinal;

	precio=parseInt(prompt("Ingrese el precio"));
	descuento=parseInt(prompt("Ingrese el porcentaje de descuento"));

	resultado=precio-(descuento/100);
	descuentoE=precio-resultado;
	resultadoFinal=resultado+0.19;

	alert("El descuento es de $"+descuentoE+"El precio con el descuento es de $"+resultado+"El IVA es del 19%");
	docuemnt.getElementById("el precio final es de $").value=resultadoFinal


}
