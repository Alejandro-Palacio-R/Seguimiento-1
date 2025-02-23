let a = parseInt(prompt ("ingrese el primer numero a comprar"))
let b = parseInt(prompt ("ingrese el segudo numero a comprar"))
let c = parseInt(prompt ("ingrese el tercer numero a comparar"))

if (a > b){
    if (a > c){
        alert("el numero "+ a +" es el mayor ingresado")
    }
    else{
        alert("el numero "+ c +" es el mayor ingresado")
    }
}
else{
    if (b > c){
        alert("el numero "+ b +" es el mayor ingresado")
    }
    else{
        alert("el numero "+ c +" es el mayor ingresado")
    }
}