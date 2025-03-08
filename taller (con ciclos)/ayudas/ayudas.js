let repetir;

do {
    let gen = prompt("Ingrese 'f' para femenino y 'm' para masculino");

    if (gen == "m") {
        alert("Su ayuda es de 40,000 pesos");
    } else {
        let edad = parseInt(prompt("Ingrese su edad"));
        if (edad > 50) {
            alert("Su ayuda es de 120,000 pesos");
        } else {
            if (edad > 29) {
                alert("Su ayuda es de 100,000 pesos");
            } else {
                alert("Usted no tiene ayuda");
            }
        }
    }

    let pregunta = prompt("¿Desea verificar otra persona? si/no").toLowerCase();
    repetir = pregunta === "si";

} while (repetir);
