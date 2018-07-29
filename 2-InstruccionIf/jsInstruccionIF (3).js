function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;
edad = parseInt(edad);

if (edad >= 18)
{
 	alert("Mayor de edad");
}
if (edad <= 17)
{
 	alert("Menor de edad");
}


}//FIN DE LA FUNCIÓN