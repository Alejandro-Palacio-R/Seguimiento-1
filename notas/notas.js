let fisica = parseInt(prompt ("ingrese su nota de fisica"))
let quimica = parseInt(prompt ("ingrese su nota de quimica"))
let biologia = parseInt(prompt ("ingrese su nota de biologia"))
let matematicas = parseInt(prompt ("ingrese su nota de matematicas"))
let informatica = parseInt(prompt ("ingrese su nota de informatica"))

let suma = fisica + quimica + biologia + matematicas + informatica
let div = suma / 50
let promedio = div * 100

console.log (suma)
console.log (div)
console.log (promedio)

if (promedio < 59){
    alert("tu promedio fue de "+ promedio +" y tu calificaion es mala :(")
}
else{
    if(promedio < 80){
        alert("tu promedio fue de "+ promedio +" y tu calificaion es buena :)")
    }
    else{
        if(promedio < 101){
            alert("tu promedio fue de "+ promedio +" y tu calificaion es excelente :D")
        }
        else{
            alert("tus notas estan mal ingresadas")
        }
    }
}


