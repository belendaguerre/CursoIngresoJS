function mostrar()
{

	var contador;
	var mayor;
	var minimo;
	var respuesta;
	var bandera;

	contador=0;
	respuesta='si';
	bandera=0;

	while(respuesta!='n')
	{
		contador=contador+1;
		numero=prompt("Ingrese numero #"+ contador);
		numero=parseInt(numero);

		if(contador==1)
		{
			menor=numero;
			mayor=numero;
		}
		else 
		{
			if(numero<menor)
			{
				menor=numero;
			}
			if(numero>mayor)
			{}
		}
	
	}




}//FIN DE LA FUNCIÓN