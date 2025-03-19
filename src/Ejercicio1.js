/**Función para encontrar la palabra más larga en una cadena de texto*/
function palabraMasLarga(texto) {
    let palabras = texto.split(" ");
    let palabraLarga = palabras[0];

    for (let palabra of palabras) {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    }
    return palabraLarga;
}
console.log(palabraMasLarga("La programación es lo mejor que hay"));
