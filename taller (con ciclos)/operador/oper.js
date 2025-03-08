let repetir;

do {
    let oper = prompt("Ingrese claro, tigo o movistar según a qué operador está asociado").toLowerCase();
    let mins = parseInt(prompt("Ingrese cuántos minutos habló por teléfono"));

    let total = 0; 

    if (oper === "claro") {
        let datos = prompt("¿Desea incluir el paquete de datos? si/no").toLowerCase();
        total = datos === "si" ? 45000 + mins * 200 + 12000 : 45000 + mins * 200;
    } 
    else if (oper === "tigo") {
        let datos = prompt("¿Desea incluir el paquete de datos? si/no").toLowerCase();
        total = datos === "si" ? 30000 + mins * 100 + 18000 : 30000 + mins * 100;
    } 
    else if (oper === "movistar") {
        let datos = prompt("¿Desea incluir el paquete de datos? si/no").toLowerCase();
        total = datos === "si" ? 40000 + mins * 250 + 8000 : 40000 + mins * 250;
    } 
    else {
        alert("Ese operador no está disponible en la página");
        total = null; 
    }

    if (total !== null) {
        alert("El costo total de su paquete será de " + total);
    }

    let pregunta = prompt("¿Desea calcular otro costo? si/no").toLowerCase();
    repetir = pregunta === "si"; 

} while (repetir);


