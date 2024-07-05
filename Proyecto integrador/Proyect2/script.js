
function OrdenarNumerosMayores (numero1, numero2,numero3){
   if (numero1 == numero2 && numero3 == numero1){
    console.log("Los numeros ingresados son iguales");
    return
   }
   if (numero1 > numero2 && numero2 > numero3){
    console.log("El numero numero mayor es "+numero1)
    }
    else if (numero2 > numero1 && numero2 > numero3){
        console.log("El numero mayor es "+numero2)
    }
    else{
        console.log("El numero mayor es "+numero3)
    }
}

function Ordenarnumerosmenores (numero1, numero2,numero3){
    if (numero1 == numero2 && numero3 == numero1){
        console.log("Los numeros ingresados son iguales");
        return
    }
    if (numero1 < numero2 && numero2 < numero3){
        console.log("El numero numero mayor es "+numero1)
        }
        else if (numero2 < numero1 && numero1 < numero3){
            console.log("El numero mayor es "+numero2)
        }
        else{
            console.log("El numero mayor es "+numero3)
        }
}

function Promedio (numero1, numero2,numero3){
    let Promedio = ((numero1+numero2+numero3)/3)
    console.log("El promedio de todos los numeros es "+Promedio)
}

numero1 = 12
numero2 = 10
numero3 = 30

OrdenarNumerosMayores(12, 10, 30)
Ordenarnumerosmenores(12, 10, 30)
Promedio(12, 10, 30)

/*Crear una funcion que va a recibir un valor en hora y nos entrege en valor en minutos y segundos*/

valorminutos = 60
valorsegundos = 3600

function Calcular (horas){
    let Calcular = valorminutos*horas
    console.log ("El valor en minutos es: "+Calcular);

    Calcular = horas*valorsegundos
    console.log ("El valor en segundos es "+Calcular)
}
Calcular(4)

/* Una funcion que nos diga si el numero es par o impar*/
 function par (num){
    if (num%2==0){
        console.log("El numero es par")
    }else
    console.log("El numero es impar")
 }
  par(10)

//Que nos calcule el total a pagar de un producto con iva//

function producto(cantidad, precio){
    let Calcular = (cantidad*precio)
    let iva = Calcular*0.19
    let total=iva+Calcular
    console.log("El total a pagar es "+total)
}

producto(10,500)

//un valor en kilos y retornar en gramos

function kilos(num){
    let calcular=(num*1000)
    return calcular
}
let resultado=kilos(125)
kilos(18)
console.log(kilos(18))
console.log(resultado)

//una funcion que nos diga si la longitud enviada es mayor a 14//

function longitud(cadena){
    if (cadena.length > 14){
        console.log("Sobrepasa el limite permitido")
    }else
        console.log("La longitud cumple con los requisitos")
}
longitud("Hola mundo mundito mundillo")

//funcion que imprima de una cadena el primier caracter y ultimo caracter//

function Imprimircaracter(str){
    console.log("el primer caracter es: "+str.substr(0,1))
    console.log("El ultimo caracter es: "+str.substr(-1,1))
}
Imprimircaracter("Hola")





