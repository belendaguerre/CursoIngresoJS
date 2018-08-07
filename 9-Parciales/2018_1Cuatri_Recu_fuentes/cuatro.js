function mostrar()
{
	var num1, num2, resultado;

	num1=parseInt(prompt("Ingrese un numero"));
	num2=parseInt(prompt("Ingrese otro numero"));

	if (num1==num2 || num1<num2) 
	{
		resultado=num1+num2;
		alert("La suma de ambos numeros es "+resultado);
	}
	else if (num1>num2)
	{
		resultado=num1/num2;
		alert("La division de ambos numeros da "+resultado);
	}
	else if (resultado<50)
	{
		alert("La suma es "+resultado+" y es menor a 50");
	}

}
