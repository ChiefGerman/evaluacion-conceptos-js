/* 
1) Guarda tu proyecto en tu github con el nombre evaluacion-conceptos-js
2) Por cada ejercicio harás un commit en donde reflejarás con la descripción el número de ejercicio.
3) Resolvé usando prompt, alert y condicionales:
a) Pida al usuario su nombre y muestre un mensaje de bienvenida.

let nombre;
nombre = prompt("Ingrese un nombre: ");
console.log ("Bienvend@ ",nombre);

b) Pida al usuario dos números y muestre su suma.


let num1, num2, suma;
num1 = prompt("Ingresa el numero 1: ");
num2 = prompt("Ingresa el numero 2: ");
suma = parseInt(num1) + parseInt(num2);
console.log("El resultado de la suma es: ",suma);


c) Pida al usuario dos números y muestre el mayor.

let num1, num2;
num1 = prompt("Ingresa el numero 1: ");
num2 = prompt("Ingresa el numero 2: ");
if(parseInt(num1) > parseInt(num2)){
    console.log("El numero 1 es el mas grande y es: ", num1);
}else{
    console.log("El numero 2 es el mas grande y es: ", num2);
}

d) Pida al usuario tres números y muestre una leyenda que diga si los tres son iguales, sino lo son que también lo informe.

let num1, num2, num3;

num1 = parseInt(prompt("Ingresa el numero 1: "));
num2 = parseInt(prompt("Ingresa el numero 2: "));
num3 = parseInt(prompt("Ingresa el numero 3: "));

if(num1 == num2 && num1 == num3 && num2 == num3){
    console.log("Los tres numeros son iguales.");
}else{
    console.log("Los numeros son diferentes.");
}

e) Pida al usuario tres números y muéstrelos ordenados de mayor a menor.

let num1, num2, num3;

num1 = parseInt(prompt("Ingresa el numero 1: "));
num2 = parseInt(prompt("Ingresa el numero 2: "));
num3 = parseInt(prompt("Ingresa el numero 3: "));

if(num1>=num2 && num1>=num3 && num2>=num3){
    console.log("El orden es: ",num1,num2,num3);
}else if(num1>=num2 && num1>=num3 && num2<=num3){
    console.log("El orden es: ",num1,num3,num2);
}else if(num2>=num1 && num2>=num3 && num1>=num3){
    console.log("El orden es: ",num2,num1,num3);
}else if(num2>=num1 && num2>=num3 && num1<=num3){
    console.log("El orden es: ",num2,num3,num2);
}else if(num3>=num1 && num3>=num2 && num1>=num2){
    console.log("El orden es: ",num3,num1,num2);
}else if(num3>=num1 && num3>=num2 && num1<=num2){
    console.log("El orden es: ",num3,num2,num1);
}

f) Pida al usuario su peso en kg y su altura en metros y muestre su índice de masa corporal (IMC): Peso (en Kg) / Altura (en metros) al cuadrado.
Si el número esta por debajo de 18.5 mostrá la leyenda "Bajo peso"
Si el número esta entre 18.6 y 24.9  mostrá la leyenda "Normal"
Si el número esta entre 25 y 29.9  mostrá la leyenda "Sobrepeso"
Si el número esmayor a 30 mostrá la leyenda "Obesidad"

var kg, mts, imc;

kg = parseInt(prompt("Ingresa el peso: "));
mts = parseFloat(prompt("Ingresa la altura: "));
imc = kg / (mts*mts);

if(imc <= 18.5){
    console.log("Bajo en peso, IMC: ",imc);
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("Normal, IMC: ",imc);
}else if(imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso, IMC: ",imc);
}else if(imc >= 30){
    console.log("Sobrepeso, IMC: ",imc);
}

4) Haremos un validador de números. 
a) Pida al usuario que ingrese un número y almacenala en una variable.
b) Mostrá el tipo de dato.
c) Si el tipo de dato no es un NUMBER, entonces mostrá un console.error "Ingresá un valor numérico"
d) Si el tipo de dato no es un NUMBER volvé a pedirlo tantas veces sea necesario hasta que se valide que el número ingresado es de tipo NUMBER
*/
