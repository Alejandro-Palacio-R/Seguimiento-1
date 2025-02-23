let tipo = prompt ("Escoja el tipo de mensualidad entre 15 dias, 30 dias o 3 meses, solo ponga el numero")
let cant = parseInt(prompt ("Cuantas mensualidades piensa pagar"))

if(tipo == 15){
    let costo = cant * 18000
    let dias = 15 * cant
    alert("el costo total de su inscripcion es de "+ costo +" y durara un total de "+ dias +" dias")
}
else{
    if(tipo == 30){
        let costo = cant * 35000
        let dias = 30 * cant
        alert("el costo total de su inscripcion es de "+ costo +" y durara un total de "+ dias +" dias")
    }
    else{
        if(tipo = 3){
            let costo = cant * 86000
            let dias = 90 * cant
            alert("el costo total de su inscripcion es de "+ costo +" y durara un total de "+ dias +" dias")
        }
    }
}