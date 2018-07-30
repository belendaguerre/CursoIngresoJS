function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var promedio;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta!="n")
	{
		numero=prompt("Ingrese un número #"+contador);
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador=contador+1;
		respuesta=prompt("Desea seguir ingresando numeros?: (si/no)");
	}


	promedio=acumulador/contador;

document.getElementById('suma').value+"la suma es"+acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN