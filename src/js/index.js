console.log('Entró al html')

//const FORM = document.getElementsByTagName("form")[0];

const rut = document.getElementById('rut').value;
let primerNombre = document.getElementById("primerNombre");
let segundoNombre = document.getElementById("segundoNombre");
let primerApellido = document.getElementById("primerApellido");
let SegundoApellido = document.getElementById("SegundoApellido");
let fechaNacimiento = document.getElementById("fechaNacimiento");
let genre = document.getElementById("genre");
let telefono = document.getElementById("telefono");
let correo = document.getElementById("correo");
let mensaje = document.getElementById("mensaje");


function resetForm() {
    valid = true;
    if (rut == '') {
        console.log('rut is not valid');
    } else {
        console.log('rut: ', rut)
    }
}