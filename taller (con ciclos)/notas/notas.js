let repetir;

do {
    let fisica = parseInt(prompt("Ingrese su nota de Física"));
    let quimica = parseInt(prompt("Ingrese su nota de Química"));
    let biologia = parseInt(prompt("Ingrese su nota de Biología"));
    let matematicas = parseInt(prompt("Ingrese su nota de Matemáticas"));
    let informatica = parseInt(prompt("Ingrese su nota de Informática"));

    let suma = fisica + quimica + biologia + matematicas + informatica;
    let div = suma / 50;
    let promedio = div * 100;

    console.log("Suma de notas:", suma);
    console.log("División:", div);
    console.log("Promedio final:", promedio);

    if (promedio < 59) {
        alert("Tu promedio fue de " + promedio + " y tu calificación es mala :(");
    } else if (promedio < 80) {
        alert("Tu promedio fue de " + promedio + " y tu calificación es buena :)");
    } else if (promedio <= 100) {
        alert("Tu promedio fue de " + promedio + " y tu calificación es excelente :D");
    } else {
        alert("Tus notas están mal ingresadas");
    }

    let pregunta = prompt("¿Deseas calcular otro promedio? si/no").toLowerCase();
    repetir = pregunta === "si";

} while (repetir);


