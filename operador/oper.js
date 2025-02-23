let oper = prompt ("Ingrese claro, tigo o movistar segun a que operador esta asociado")
let mins = parseInt(prompt("Ingrese cuantos minutos hablo por telefono"))

if(oper == "claro"){
    let datos = prompt ("Desea incluir el paquete de datos? si/no")
        if (datos == "si"){
            let total = 45000 + mins * 200 + 12000
            alert("El costo total de su paquete sera de "+ total)
        }
        else{
            let total = 45000 + mins * 200 
            alert("El costo total de su paquete sera de "+ total)
        }
}
else{
    if(oper == "tigo"){
        let datos = prompt ("Desea incluir el paquete de datos? si/no")
        if (datos == "si"){
            let total = 30000 + mins * 100 + 18000
            alert("El costo total de su paquete sera de "+ total)
        }
        else{
            let total = 30000 + mins * 100 
            alert("El costo total de su paquete sera de "+ total)
        }
    }
    else{
        if(oper == "movistar"){
            let datos = prompt ("Desea incluir el paquete de datos? si/no")
        if (datos == "si"){
            let total = 40000 + mins * 250 + 8000
            alert("El costo total de su paquete sera de "+ total)
        }
        else{
            let total = 40000 + mins * 250 
            alert("El costo total de su paquete sera de "+ total)
        }
        }
        else{
            alert("Ese operador no esta disponible en la pagina")
        }
    }
}


