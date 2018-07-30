/*
Ingreso:
María f 15
José m 33
Pepe m 81
mostrar:
    Cantidad 
        1 De mayores de edad 2
        2 menosres de edad 1
        3 mujeres 1
        4 hombres 2
        5 nombre del mayor Pepe 
        6 nombre del menor María
        7 nombre del hombre del menor edad Jose */

function mostrar()
{
    var nombre;
    var sexo;
    var edad;
    var cantidad;
    var contador;
    var contadorMayoresDeEdad;
    var contadorMenoresDeEdad;
    var contadorHombres;
    var contadorMujeres;
    var nombreMayorDeEdad;
    var nombreMenorDeEdad;

    contador=0;
    contadorMayoresDeEdad=0;
    contadorMenoresDeEdad=0;
    contadorHombres=0;
    contadorMujeres=0;
    
    while(contador<3)
    {
        contador++;
        nombre=prompt("ing nombre");
        sexo=prompt("ing sexo");
        while(sexo!="f"&&sexo!="m");
        {
            sexo=prompt("error ing sexo")
        }
        edad=prompt("ing edad");
        while(edad<0||edad>100)
        {
            edad=prompt("error. ing edad");
        }
        if(edad>18)
        contadorMayoresDeEdad++;
        {
        nombre=prompt("ing nombre");
        sexo=prompt("ingrese sexo");
        }

    }


}
