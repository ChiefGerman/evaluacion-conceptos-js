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
}else{
    console.log("Sobrepeso, IMC: ",imc);
}

4) Haremos un validador de números. 
a) Pida al usuario que ingrese un número y almacenala en una variable.
b) Mostrá el tipo de dato.
c) Si el tipo de dato no es un NUMBER, entonces mostrá un console.error "Ingresá un valor numérico"
d) Si el tipo de dato no es un NUMBER volvé a pedirlo tantas veces sea necesario hasta que se valide que el número ingresado es de tipo NUMBER

let valor=0;

while(valor != 1){
    valor = parseInt(prompt("Ingrese un valor numero"));
    if(isNaN(valor)){
        alert("INGRESE UN VALOR NUMERICO!");
        valor = 0;
    }else{
        alert("EL VALOR INGRESADO ES UN NUMERO.");
        alert("FIN DEL PROGRAMA.");

        valor = 1;
    }
}

5)
a) Ingresá un vector llamado dias, en donde se carguen los días lunes a domingo.
b) Mostrá uno por uno los días de la semana. 
c) Cuando sea Sabado o Domingo, deberá mostrarse la leyenda "Fin de semana!"

const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for(let i=0; i < dias.length; i++){
    if(i==5 || i==6){
        console.log(dias[i]," - Fin de semana");
    }else{
        console.log(dias[i]);
    }
}

6) Vamos al supermercado. Crea un vector llamado carrito.
a) Con un prompt ingresá un artículo, Con un segundo prompt el costo unitario y con un tercer prompt el monto por unidad.
b) En el carrito solo ingresarás los artículos.
c) En una variable irás sumando el valor de cada artículo que irás acumulando (monto por unidad * cantidad de unidades).
d) La carga finalizará con un articulo con nombre 0 (cero).
e) Finalmente mostrarás una factura con el siguiente formato:
************************************
FACTURA A - Número XXXXXXX-XXXXXXX-X
Ítems:
- Manteca
- Cafe
- Limones

Total a facturar: $3500.00
************************************
*/
let Items = [], i=1, j=1, costo = [], cantidad = [], suma1 = [], suma2=0, modificar = "NO", modificar2= 0;

while(i){
    Items[i] = prompt("Ingrese un producto de supermercado (Ingresa 0 para finalizar la carga)");

    if(Items[i] == 0){
       modificar = prompt("Desea modificar alguno de los productos ingresados? SI / NO");
        
       if(modificar == "SI"){
        console.log("     Producto   |   costo   |   cantidad");
        for(i=1;i<Items.length-1;i++){
            console.log(i," - "+Items[i]+"         $"+costo[i]+"         "+cantidad[i]);
        }
        while(modificar == "SI"){
        i = 1;
        modificar2 = parseInt(prompt("Que producto desea modificar? (Ingrese un numero)"));
        i = modificar2;
        Items[i] = prompt("Ingrese el NUEVO nombre del producto");
        costo[i] = parseInt(prompt("Ingrese el NUEVO costo del Producto"));
        cantidad[i] = parseInt(prompt("Ingrese la NUEVA cantidad del Producto"));
        console.log("      -      -      -      -      ");
        console.log("     Producto   |   costo   |   cantidad");
        for(i=1;i<Items.length-1;i++){
            console.log(i," - "+Items[i]+"         $"+costo[i]+"         "+cantidad[i]);
        }
        modificar = prompt("Desea seguir modificando productos? SI / NO");
        }
       }else{
        break;
       }
       if(modificar!="SI"){
            break;
        }
       
    }else{
        costo[i] = parseInt(prompt("Ingrese el costo del Producto"));
        cantidad[i] = parseInt(prompt("Ingrese la cantidad del Producto"));
        i++;
    }
}

for(j=1;j<costo.length;j++){
    suma1[j]= costo[j] * cantidad[j];
    suma2 = suma1[j] + suma2; 
}

console.log("********************************");
console.log("Factura A - Numero 4376-235432-2");
console.log("Items:");
for(j=1;j<Items.length-1;j++){
    console.log("      ",Items[j]);
}
console.log("Total a facturar: $",suma2);
console.log("********************************");

/*
7) Modifica el punto anterior para que, antes de finalizar la carga pregunte si queremos editar. Si responde "SI" entonces.
a) Que indique con un número el ítem que quiere modificar. 
b) Se reemplazara el nombre del artículo pero no la cantidad y el costo. 
c) Una vez finalizado el reemplazo se preguntará si quiere seguir modificando. En caso afirmativo pasaremos al punto (a) y sino se mostrará el punto (6 - e

8) Modificá el ejercicio anterior para que haya un vector que sea "ítems"; otro, "precio por unidad" y el tercero "cantidad comprada".
a) Al señalar un campo a modificar (ingresado a partir del índice del mismo) debes pedir el nombre del ítem, la cantidad y el precio. Y modificarlos en cada vector.
b) Cuando ya no se busque modificar alguno de los ítems, se mostrará el resultado final (punto 6 - e)
*/

