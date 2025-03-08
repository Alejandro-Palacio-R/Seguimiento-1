let repetir;

do {
    let tam = prompt("Ingrese 1 para lavadora grande o 2 para pequeña");
    let cant = prompt("Ingrese cuántas lavadoras desea alquilar");
    let horas = prompt("Ingrese cuántas horas va a alquilar sus lavadoras");

    if (tam == 1) {
        if (cant > 3) {
            let precio = cant * horas * 4000;
            let disc = precio - ((precio * 3) / 100);
            console.log(precio);
            console.log(disc);
            alert("El costo por alquilar " + cant + " de lavadoras de tamaño grande por " + horas + " horas es de " + disc);
        } else {
            let precio = cant * horas * 4000;
            alert("El costo por alquilar " + cant + " de lavadoras de tamaño grande por " + horas + " horas es de " + precio);
        }
    } else if (tam == 2) {
        if (cant > 3) {
            let precio = cant * horas * 3000;
            let disc = precio - ((precio * 3) / 100);
            alert("El costo por alquilar " + cant + " de lavadoras de tamaño pequeña por " + horas + " horas es de " + disc);
        } else {
            let precio = cant * horas * 3000;
            alert("El costo por alquilar " + cant + " de lavadoras de tamaño pequeña por " + horas + " horas es de " + precio);
        }
    } else {
        alert("Ese tamaño de lavadora no está entre las opciones");
    }

    let pregunta = prompt("¿Desea calcular otro alquiler? si/no").toLowerCase();
    repetir = pregunta === "si";

} while (repetir);
