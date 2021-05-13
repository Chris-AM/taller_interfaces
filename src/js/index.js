console.log('Entró al html')

let rut = document.forms["formulario"]["rut"].value;
let primerNombre = document.forms["formulario"]["primerNombre"].value;
let segundoNombre = document.forms["formulario"]["primerNombre"].value;
let primerApellido = document.forms["formulario"]["primerNombre"].value;
let SegundoApellido = document.forms["formulario"]["primerNombre"].value;
let fechaNacimiento = document.forms["formulario"]["primerNombre"].value;
let genre = document.forms["formulario"]["primerNombre"].value;
let telefono = document.forms["formulario"]["primerNombre"].value;
let correo = document.forms["formulario"]["primerNombre"].value;
let mensaje = document.forms["formulario"]["primerNombre"].value;

function resetForm() {
    if (rut ||
        primerNombre ||
        segundoNombre ||
        primerApellido ||
        SegundoApellido ||
        fechaNacimiento ||
        genre ||
        telefono ||
        correo ||
        mensaje === "") {
        alert("todos los campos deben ser llenados");

    } else {
        alert("muchas gracias, nos pondremos en contacto contigo pronto");

    }
}