let repe = false
 do{
let mod = prompt ("Ingrese el modelo de su carro")

if( mod == 119 || mod == 179 || mod == 189 || mod == 195 || mod == 221 || mod == 780){
    alert("Su carro esta defectuoso")
}
else{
    alert("Su carro no esta defectuoso")
}
let pregunta = prompt("Desea verificar otro vehiculo? si/no")
if(pregunta == "si"){
     repe = true
}
else{
    repe = false
}
}while(repe == true)