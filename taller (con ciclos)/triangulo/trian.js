let repetir;

do {
    let ang1 = parseInt(prompt("Ingrese el valor del primer ángulo"));
    let ang2 = parseInt(prompt("Ingrese el valor del segundo ángulo"));
    let ang3 = parseInt(prompt("Ingrese el valor del tercer ángulo"));

    let suma = ang1 + ang2 + ang3;

    if (suma === 180) {
        alert("El triángulo es válido");
    } else {
        alert("El triángulo no es válido");
    }

    let pregunta = prompt("¿Desea verificar otro triángulo? si/no").toLowerCase();
    repetir = pregunta === "si"; 

} while (repetir);