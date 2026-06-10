function combinarNombre(nombre, apellido) {
    return nombre.trim() + " " + apellido.trim();
}

if (typeof exports !== 'undefined') {
    module.exports = { combinarNombre };
} else {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    
    let nombreCompleto = combinarNombre(nombre, apellido);
    alert("Tu nombre completo es: " + nombreCompleto);
}