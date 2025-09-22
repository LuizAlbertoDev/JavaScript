


const valor_combustivel = 5.79;
const gasto_medio = 10;
const distancia_km = 100;

const litrosConsumidos = distancia_km / gasto_medio;
const gasto = valor_combustivel * litrosConsumidos;





console.log('R$', gasto.toFixed(2));