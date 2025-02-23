let cant = prompt("Ingrese cuantas fotocopias desea sacar")

if(cant < 500){
    let precio = cant * 120
    alert("Usted decidio sacar "+ cant +" copias y tendra un precio total de "+ precio)
}
else{
    if(cant < 750){
        let precio = cant * 100
        alert("Usted decidio sacar "+ cant +" copias y tendra un precio total de "+ precio)
    }
    else{
        if(cant < 1000){
            let precio = cant * 80
            alert("Usted decidio sacar "+ cant +" copias y tendra un precio total de "+ precio)
        }
        else{
            let precio = cant * 50
            alert("Usted decidio sacar "+ cant +" copias y tendra un precio total de "+ precio)
        }
    }
}