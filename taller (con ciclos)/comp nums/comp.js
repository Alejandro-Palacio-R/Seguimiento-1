let repetir;

do {
    let a = parseInt(prompt("Ingrese el primer número a comparar"));
    let b = parseInt(prompt("Ingrese el segundo número a comparar"));
    let c = parseInt(prompt("Ingrese el tercer número a comparar"));

    if (a > b) {
        if (a > c) {
            alert("El número " + a + " es el mayor ingresado");
        } else {
            alert("El número " + c + " es el mayor ingresado");
        }
    } else {
        if (b > c) {
            alert("El número " + b + " es el mayor ingresado");
        } else {
            alert("El número " + c + " es el mayor ingresado");
        }
    }

    let pregunta = prompt("¿Desea comparar otros números? si/no").toLowerCase();
    repetir = pregunta === "si";

} while (repetir);