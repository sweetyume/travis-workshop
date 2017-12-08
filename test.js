const { expect } = require('chai');
const fizzbuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
    it('should return 1', () => {
        // Given
        const number = 1;
        // When
        const result = fizzbuzz(number);
        // Then
        expect(result).to.equal(1);
    });

    it('should return 2', () => {
        // Given
        const number = 2;
        // When
        const result = fizzbuzz(number)
        // Then
        expect(result).to.equal(2);
    });

    it('should return FIZZ when number = 3', () => {
        // Given
        const number = 3;
        // When
        const result = fizzbuzz(number)
        // Then
        expect(result).to.equal('FIZZ');
    });

    it('should return BUZZ when number = 5', () => {
        // Given
        const number = 5;
        // When
        const result = fizzbuzz(number)
        // Then
        expect(result).to.equal('BUZZ');
    });

    it('should return FIZZ when number = 9', () => {
        // Given
        const number = 9;
        // When
        const result = fizzbuzz(number)
        // Then
        expect(result).to.equal('FIZZ');
    });

    it('should return BUZZ when number = 10', () => {
        // Given
        const number = 10;
        // When
        const result = fizzbuzz(number)
        // Then
        expect(result).to.equal('BUZZ');
    });

    it('should return FIZZBUZZ when number = 15', () => {
        // Given
        const number = 15;
        // When 
        const result = fizzbuzz(number);
        // Then
        expect(result).to.equal('FIZZBUZZ');
    });

    it('should return FIZZBUZZ when number = 30', () => {
        // Given
        const number = 30;
        // When 
        const result = fizzbuzz(number);
        // Then
        expect(result).to.equal('FIZZBUZZ');
    });

});
