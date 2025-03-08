let repetir;

do {
    let cant = prompt("Ingrese cuántas fotocopias desea sacar");

    if (cant < 500) {
        let precio = cant * 120;
        alert("Usted decidió sacar " + cant + " copias y tendrá un precio total de " + precio);
    } else {
        if (cant < 750) {
            let precio = cant * 100;
            alert("Usted decidió sacar " + cant + " copias y tendrá un precio total de " + precio);
        } else {
            if (cant < 1000) {
                let precio = cant * 80;
                alert("Usted decidió sacar " + cant + " copias y tendrá un precio total de " + precio);
            } else {
                let precio = cant * 50;
                alert("Usted decidió sacar " + cant + " copias y tendrá un precio total de " + precio);
            }
        }
    }

    let pregunta = prompt("¿Desea calcular otro número de copias? si/no").toLowerCase();
    repetir = pregunta === "si";

} while (repetir);