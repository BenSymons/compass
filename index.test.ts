const compass = require("./index.js")

describe('compass tests', () => {
    test('Will return the initial direction if no turns are made', () => {
        expect(compass(['E'])).toBe('E')
    })
    test('Simple tests', () => {
        expect(compass(['N', 'L', 'L'])).toBe('S');
        expect(compass(['W', 'R', 'R', 'L'])).toBe('N');
        expect(compass(['E', 'R', 'R', 'R', 'R'])).toBe('E');
        expect(compass(['N', 'R', 'R', 'L', 'L', 'L'])).toBe('W');
    })
    test('Complex tests', () => {
        expect(compass(['E', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'])).toBe('S')
        expect(compass(['S', 'L', 'R', 'R', 'L', 'L', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L'])).toBe('W')
        expect(compass(['N', 'L', 'R', 'L', 'R', 'L', 'R', 'R', 'L', 'L', 'R', 'R', 'L', 'R', 'L', 'R', 'L'])).toBe('N')
    })
})