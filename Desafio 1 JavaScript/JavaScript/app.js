// variables declaradas según el tipo de auto.
let vPe = 0;
let vMed = 0;
let vGrand = 0;
let vTotal = 0;
// variables declaradas según el precio del auto.
let vPe1 = 1500;
let vMed2 = 2000;
let vGrand3 = 2500;
// variables declaradas según el acumulado de $.
let vPequeAcu = 0;
let vMeDAcu = 0;
let vGrandAcu = 0;
let vTotalAcu = 0;
let promedio = 0;
// variable para el promt donde el usuario ingresara el tipo del auto
let au;
//
let cant = 1;
while (cant <= 10) 
{
let ingreso = false; 
while (ingreso == false) 
{
    au = parseInt(prompt("ingrese modelo de ropa (1= remera, 2= pantalon, 3= buzo):"));
    if (au <= 3) {
        ingreso = true;
    }
    else{
        alert(" no has ingresado un valor correcto. Volve a intentarlo. ")
    }
}
switch (au)
{
    case 1:
        vPe++;
        vPequeAcu = vPequeAcu + vPe1
        break;
    case 2:
        vMed++;
        vMeDAcu = vMeDAcu + vMed2
        break;
    case 3:
        vGrand++;
        vGrandAcu = vGrandAcu + vGrand3
        break;
}
vTotal = vPe + vMed + vGrand;
vTotalAcu = vPequeAcu + vMeDAcu + vGrandAcu;
alert("cantidad de prendas ingresadas de momento: " + vTotal + " costo: " + vTotalAcu);
cant++;
}
promedio = vTotalAcu / vTotal;
alert("El valor promedio de las 10 prendas registradas es equivalente a : $" + promedio);