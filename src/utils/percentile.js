function percentile(p, values) {
    if (!Array.isArray(values) || values.length === 0) {
        throw new Error('La lista debe ser un arreglo no vacío.');
    }
    if (typeof p !== 'number' || p < 0 || p > 100) {
        throw new RangeError('El percentil p debe estar entre 0 y 100.');
    }

    // Copia y ordena ascendentemente
    const sorted = [...values].sort((a, b) => a - b);

    if (p === 0) return sorted[0]; // Mínimo
    if (p === 100) return sorted[sorted.length - 1]; // Máximo

    const N = sorted.length;
    const rank = Math.ceil((p / 100) * N);

    // Índice 1..N convertido a 0..N-1
    return sorted[rank - 1];
}

module.exports = percentile;