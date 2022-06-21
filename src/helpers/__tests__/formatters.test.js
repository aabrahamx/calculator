import { changeToNumber, formatFloatNum } from '../formatters'

describe('calculated number formatter function', () => {
    it('should return a number', () => {
        const input = 123;
        const expectedType = 'number';
        const outputType = typeof formatFloatNum(input);
        expect(outputType).toEqual(expectedType);
    })
    it('should return null on string input', () => {
        const input = '123';
        const output = formatFloatNum(input)
        const expected = null;
        expect(output).toEqual(expected);
    })
    it('should return null on boolean input', () => {
        const input = true;
        const output = formatFloatNum(input);
        const expected = null;
        expect(output).toEqual(expected);
    })
    it('should return null on array input', () => {
        const input = [1, 2];
        const output = formatFloatNum(input);
        const expected = null;
        expect(output).toEqual(expected)
    })
    it('should return null on object input', () => {
        const input = {num1: 1, num: 2};
        const output = formatFloatNum(input);
        const expected = null;
        expect(output).toEqual(expected);
    })
    it('should return input if input is integer', () => {
        const input = 123;
        const output = formatFloatNum(input);
        const expected = input;
        expect(output).toEqual(expected)
    })
    it('should return one decimal number for input that only have one decimal', () => {
        const input = 1.2;
        const output = formatFloatNum(input);
        const expected = input;
        expect(output).toEqual(expected);
    } )
    it('should return two decimal number for input floats greater than one decimal', () => {
        const input = 1.234;
        const output = formatFloatNum(input);
        const expected = 1.23;
        expect(output).toEqual(expected);
    })
})



describe('string to number changer function', () => {
    it('should return a number', () => {
        const input = '123';
        const output = typeof changeToNumber(input);
        const expected = 'number';
        expect(output).toEqual(expected);
    })
    it('should return integer if input string doesnt include (.)', () => {
        const input = '123456';
        const output = changeToNumber(input);
        const expected = 123456;
        expect(output).toEqual(expected)
    })
    it('should return floating number if string includes (.)', () => {
        const input = '123.456';
        const output = changeToNumber(input);
        const expected = 123.456;
        expect(output).toEqual(expected);
    })
})