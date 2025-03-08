let repetir;

do {
    let tipo = prompt("Escoja el tipo de mensualidad entre 15 días, 30 días o 3 meses, solo ponga el número");
    let cant = parseInt(prompt("Cuántas mensualidades piensa pagar"));

    if (tipo == 15) {
        let costo = cant * 18000;
        let dias = 15 * cant;
        alert("El costo total de su inscripción es de " + costo + " y durará un total de " + dias + " días");
    } else {
        if (tipo == 30) {
            let costo = cant * 35000;
            let dias = 30 * cant;
            alert("El costo total de su inscripción es de " + costo + " y durará un total de " + dias + " días");
        } else {
            if (tipo == 3) { 
                let costo = cant * 86000;
                let dias = 90 * cant;
                alert("El costo total de su inscripción es de " + costo + " y durará un total de " + dias + " días");
            } else {
                alert("Opción no válida");
            }
        }
    }

    let pregunta = prompt("¿Desea calcular otra inscripción? si/no").toLowerCase();
    repetir = pregunta === "si";

} while (repetir);