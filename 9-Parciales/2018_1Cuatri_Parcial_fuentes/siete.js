function mostrar()
{
	var nota, sexo, suma=0, promedio, contador=0;

	for(var i=0; i<5; i++)
	{
		do
		{
			nota=parseInt(prompt("Ingrese la nota"));
		}
		while (nota < 0 || nota >10);
		do
		{
			sexo = parseInt(prompt("Ingrese sexo (f , m)"));
		}
		while(toUpperCase(sexo) !="F" && toUpperCase (sexo) != "M");
		suma = suma + nota;
		if(i==0)
		{
			menor=nota;
		}
		if(toUpperCase (sexo) == "M" && nota >= 6)
		{
			contador = contador + 1;
		}

	} 
	promedio = suma / 5;
	alert (promedio);
	alert (menor);
	alert (contador);

}
