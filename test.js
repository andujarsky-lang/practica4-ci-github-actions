const { combinarNombre } = require('./nombreCompleto.js');

console.log("⏳ Iniciando prueba unitaria...");

const resultado = combinarNombre("Sky", "Andujar");
const esperado = "Sky Andujar";

if (resultado === esperado) {
    console.log("Prueba superada con éxito!");
    process.exit(0); 
} else {
    console.error(`Error: Se esperaba "${esperado}" pero se obtuvo "${resultado}"`);
    process.exit(1); 
}