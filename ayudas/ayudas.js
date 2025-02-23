let gen = prompt ("ingrese f para femenino y m para masculino")

if(gen == "m"){
    alert("su ayuda es de 40,000 pesos")
}
else{
    let edad = parseInt(prompt ("ingrese su edad"))
    if(edad > 50){
        alert("su ayuda es de 120,000 pesos")
    }
    else{
        if(edad > 29){
            alert("su ayuda es de 100,000 pesos")
        }
        else{
            alert("usted no tiene ayuda")
        }
    }
}
