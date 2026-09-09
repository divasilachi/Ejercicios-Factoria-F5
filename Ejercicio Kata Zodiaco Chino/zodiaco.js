export function zodiacoChino(ano) {
  // Validación de errores de entrada (Criterio Avanzado)
  if (typeof ano !== "number" || !Number.isInteger(ano)) {
    throw new TypeError("El año debe ser un número entero válido");
  }

  const elementos = ["Madera", "Fuego", "Tierra", "Metal", "Agua"];
  const animales = [
    "Rata",
    "Buey",
    "Tigre",
    "Conejo",
    "Dragón",
    "Serpiente",
    "Caballo",
    "Oveja",
    "Mono",
    "Gallo",
    "Perro",
    "Cerdo",
  ];

  const diff = ano - 1984;

  // Operaciones matemáticas óptimas con módulos
  let elementoIdx = Math.floor(diff / 2) % elementos.length;
  let animalIdx = diff % animales.length;

  // Manejo correcto de restos negativos para años pasados (Criterio Avanzado)
  if (elementoIdx < 0) elementoIdx += elementos.length;
  if (animalIdx < 0) animalIdx += animales.length;

  return `${elementos[elementoIdx]} ${animales[animalIdx]}`;
}
