function mostrar()
{
	var contador;
	var positivo;
	var negativo;
	var respuesta;
	var suma;
	var multiplicacion;
	var numero;

	contador=0;
	positivo=0;
	negativo=1;
	respuesta='si';

	while(respuesta!="n")
	{
		numero=parseInt(prompt("Ingrese un número"));
		numero=parseInt(numero);
		respuesta=prompt("Desea seguir ingresando numeros?: (si/no)");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN