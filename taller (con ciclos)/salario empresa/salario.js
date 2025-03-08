let repe
do{
let name = prompt ("ingrese su nombre")
let work = prompt("ingrese cuantas horas trabajo esta semana:")

console.log(work)

if (work <= 10){
    let salario = work * 30000
    console.log(salario)
    alert("señor/a "+ name +", el numero de horas es "+ work +" y su salario equivale a "+ salario)
}
else{
   let salario = work * 33000
   console.log(salario)
   alert("señor/a "+ name +", el numero de horas es "+ work +" y su salario equivale a "+ salario)
}
let pregunta = prompt("Desea calcular otro salario?si/no").toLowerCase()
repe = pregunta === "si"
}while(repe)

    
