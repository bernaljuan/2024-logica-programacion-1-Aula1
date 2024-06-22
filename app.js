/*
-----------------------------------------------
Primer ejercicio
alert("Bienvenida y bienvenido a nuestro sitio web");

let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = "¡Error! Completa todos los campos";

alert(mensajeDeError);

nombre = prompt("Digite su nombre");
edad = prompt("Digite su edad");


if(edad >= 18) {
    alert(nombre + " ¡Puedes obtener tu licencia de conducir!");
}
-----------------------------------------------
//Ejercicio bucle
let numero = 0;
while (numero < 10){
    alert(numero);
    numero = numero + 1;
}
alert("Fin del bucle");
-----------------------------------------------
nombre = "Juan"
alert(`Hola ${nombre}`);
console.log(`Hola ${nombre}`);
-----------------------------------------------
lenguajeProgramacion = prompt("Cual es tu lenguaje favorito?");
console.log(`${lenguajeProgramacion}`)
-----------------------------------------------
num1 = 1;
num2 = 3;
resultado = num1 + num2;
console.log(`${resultado}`)
-----------------------------------------------
*/


//Declaracion de variales y con el prompt solicitamos un valor al usuario
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabrasVeces = 'vez';
let maxIntentos = 3;
//Bucle que se repite mientras el usuario no ingrese el numero correcto
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Ingresa un numero del 1 al ${numeroMaximoPosible}: `));
    //verificar el valor en la consola del navegador
    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        //Se cumple la condicion
        alert(`Acertaste, el numero es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ?'vez' : 'veces'}.`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        } else {
        //No se cumple 
        alert('El numero secreto es mayor');
        }
    //Aumentar el numero de intentos cuando no acierta  
        intentos++;
        //palabrasVeces = 'veces';
        if(intentos > maxIntentos){
            alert(`Llegaste al numero maximo de intentos que es ${maxIntentos} intentos`);
            break;
        }
    }
}


