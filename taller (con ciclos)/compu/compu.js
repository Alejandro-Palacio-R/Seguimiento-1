let repetir;

do {
    let pitido = prompt("¿Su computadora emite un pitido? si/no");
    let disc = prompt("¿El disco duro gira correctamente? si/no");

    if (pitido == "si") {
        if (disc == "si") {
            alert("Contacte a un técnico de apoyo");
        } else {
            alert("Verifique los contactos de la unidad");
        }
    } else {
        if (disc == "si") {
            alert("Compruebe las conexiones de los altavoces");
        } else {
            alert("Lleve el dispositivo a la central por reparación");
        }
    }

    let pregunta = prompt("¿Desea realizar otra verificación? si/no").toLowerCase();
    repetir = pregunta === "si";

} while (repetir);