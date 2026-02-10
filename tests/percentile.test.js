const percentile = require('../src/utils/percentile');

describe('percentile Tests', () => {
    test('Referencia: p=0 devuelve mínimo', () => {
        expect(percentile(0, [1, 2, 3])).toBe(1);
    });

    test('Referencia: p=100 devuelve máximo', () => {
        expect(percentile(100, [1, 2, 3])).toBe(3);
    });

    test('Referencia: p=50, [1,2,3,4] -> 2 (nearest-rank)', () => {
        expect(percentile(50, [1, 2, 3, 4])).toBe(2);
    });

    test('Lanza RangeError si p fuera de rango', () => {
        expect(() => percentile(150, [1, 2])).toThrow(RangeError);
    });
});