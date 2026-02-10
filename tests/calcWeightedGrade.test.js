const calcWeightedGrade = require('../src/utils/calcWeightedGrade');

describe('calcWeightedGrade Tests', () => {
    test('Caso Referencia: [{score:80,weight:0.4},{score:90,weight:0.6}] -> 86.00', () => {
        const items = [{ score: 80, weight: 0.4 }, { score: 90, weight: 0.6 }];
        expect(calcWeightedGrade(items)).toBe(86.00);
    });

    test('Lanza RangeError si pesos no suman 1', () => {
        expect(() => calcWeightedGrade([{ score: 80, weight: 0.5 }])).toThrow(RangeError);
    });

    test('Lanza TypeError si input no es array', () => {
        expect(() => calcWeightedGrade("hola")).toThrow(TypeError);
    });
});