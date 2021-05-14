const {validateItem, convertArray} = require('./codeArrays');

describe('validateItem', () => {
    test('Should print invalid if the argument is not a number', () => {
        const expected = 'invalid';
        const result = validateItem('a');
        expect(expected).toBe(result);
    });
    test('Should print invalid if the argument is not an integer', () => {
        const expected = 'invalid';
        const result = validateItem(3.15);
        expect(expected).toBe(result);
    });
    test('Should print integer if they receive 1', () => {
        const expected = 'integer';
        const result = validateItem(1);
        expect(expected).toBe(result);
    });
    test('Should print integer if they receive -1', () => {
        const expected = 'integer';
        const result = validateItem(-1);
        expect(expected).toBe(result);
    });
    test('Should print array if they receive [2,3,1,4,[5,6]]', () => {
        const expected = 'array';
        const result = validateItem([2,3,1,4,[5,6]]);
        expect(expected).toBe(result);
    });
});

describe('convertArray', () => {
    test('Should print error message if they don´t receive an array', () => {
        const expected = 'Error: The argument must be an array';
        const result = convertArray();
        expect(expected).toBe(result);
    });
    test('Should print error message if they don´t receive an array', () => {
        const expected = 'Error: The argument must be an array';
        const result = convertArray({key: 1});
        expect(expected).toBe(result);
    });
    test('Should print error message if they receive an invalid array', () => {
        const expected = 'Error: Invalid arguments';
        const result = convertArray(['a', 'b']);
        expect(expected).toBe(result);
    });
    test('Should print a smaller array if they receive an array with some invalid arguments', () => {
        const expected = [1, 2, 6, 5, 2, 4, 3, 9, 134, 5, 3, 25];
        const result = convertArray([1, 2, 6, 5, [2, 4, [3, 9, 134, [5, '1', 3, 'a'], 25]]]);
        expect(expected).toEqual(result);
    });
    test('Should print new array if they receive an array with all valid arguments', () => {
        const expected =  [1, 2, 3, 4, 5];
        const result = convertArray( [1, [2, [3, [4, 5]]]]);
        expect(expected).toEqual(result);
    });
});