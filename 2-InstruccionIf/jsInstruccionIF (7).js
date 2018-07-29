function Mostrar()
{
	var edad=document.getElementById('edad').value;
	var eCiv=document.getElementById('estadoCivil').value;
	if (edad<=17&&eCiv!="Soltero") {										
		alert("Es muy pequeño para NO ser soltero. Los viedeojuegos no cuentan");
	}
}