let repe
    do{
        let tam = prompt("Ingrese grande para un sandwich grande o chico para uno chico")
let jal = prompt("Desea jalapeño? si/no")
let toc = prompt("Desea tocineta? si/no")
let pav = prompt("Desea pavo? si/no")
let ques = prompt("Desea queso? si/no")

if(tam == "grande"){
    let total = 12000
    if(toc == "si"){
        total += 3000
    }
    else{}
    if(pav == "si"){
        total += 3000
    }
    else{}
    if(ques == "si"){
        total += 2500
    }
    else{}
    alert("El total de su pedido de un sandwich grande es de "+ total)
}
else{
    if(tam == "chico"){
        let total = 6000
    if(toc == "si"){
        total += 3000
    }
    else{}
    if(pav == "si"){
        total += 3000
    }
    else{}
    if(ques == "si"){
        total += 2500
    }
    else{}
    alert("El total de su pedido de un sandwich chico es de "+ total)
    }
    else{
        alert("Ese tamaño no esta disponible en estos momentos")
    }
}

        let pregunta = prompt("Desea ordenar otro sandwich?si/no").toLowerCase()
        repe = pregunta === "si"
    }while(repe)
