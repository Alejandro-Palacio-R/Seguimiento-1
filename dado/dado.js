let num = prompt ("ingrese un numero")

let ver = num / 2

console.log(ver)

let par = Number.isInteger(ver)

console.log(par)

if (par == true){
    alert("el numero es par")
}
else {
    alert("el numero es impar")
}