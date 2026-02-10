function calcWeightedGrade(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('El argumento debe ser un arreglo.');
    }

    let totalWeight = 0;
    let weightedSum = 0;

    for (const item of items) {
        if (typeof item.score !== 'number' || typeof item.weight !== 'number') {
            throw new TypeError('Los elementos deben tener score y weight numéricos.');
        }
        if (item.score < 0 || item.score > 100) {
            throw new RangeError('Score fuera de rango (0-100).');
        }
        if (item.weight < 0 || item.weight > 1) {
            throw new RangeError('Weight fuera de rango (0-1).');
        }
        totalWeight += item.weight;
        weightedSum += item.score * item.weight;
    }

    // Tolerancia de +/- 0.001
    if (Math.abs(1 - totalWeight) > 0.001) {
        throw new RangeError('La suma de los pesos debe ser 1.');
    }

    return parseFloat(weightedSum.toFixed(2));
}

module.exports = calcWeightedGrade;
