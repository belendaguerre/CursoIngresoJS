function mostrar()
{
	var numero1, numero2, resultado;

	numero1 = parseInt (prompt ("Ingrese numero uno"));
	numero2 = parseInt (prompt ("Ingrese numero dos"));

	if (numero1 == numero2 || numero1<numero2)
	{
		resultado = numero1 + numero2;
		alert ("El resultado de la suma es " + resultado);
	}
	else if (numero1>numero2)
	{
		resultado = numero1 - numero2;
		alert ("El resultado de la resta es " + resultado);
	}
	else if (resultado >=10)
	{
		
		alert (resultado);
		alert ("La suma es " + resultado + " y superó el 10");
	}


}
