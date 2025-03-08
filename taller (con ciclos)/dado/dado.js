let repetir;

do {
    let num = prompt("Ingrese un número");

    let ver = num / 2;
    console.log(ver);

    let par = Number.isInteger(ver);
    console.log(par);

    if (par == true) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }

    let pregunta = prompt("¿Desea verificar otro número? si/no").toLowerCase();
    repetir = pregunta === "si";

} while (repetir);