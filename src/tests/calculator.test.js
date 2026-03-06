const { add, subtract, multiply, divide, calculate, isValidNumber } = require('../calculator');

describe('Calculator Functions', () => {
  
  // ============================================
  // Addition Tests
  // ============================================
  describe('Addition (add)', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add a positive and negative number', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add decimals', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('should handle large numbers', () => {
      expect(add(999999, 1)).toBe(1000000);
    });
  });

  // ============================================
  // Subtraction Tests
  // ============================================
  describe('Subtraction (subtract)', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract a larger number from a smaller one', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(7, 0)).toBe(7);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimals', () => {
      expect(subtract(10.5, 4.2)).toBeCloseTo(6.3);
    });

    test('should handle large numbers', () => {
      expect(subtract(1000000, 1)).toBe(999999);
    });
  });

  // ============================================
  // Multiplication Tests
  // ============================================
  describe('Multiplication (multiply)', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('should multiply decimals', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply small decimals', () => {
      expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });

    test('should handle large numbers', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });
  });

  // ============================================
  // Division Tests
  // ============================================
  describe('Division (divide)', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide positive by negative', () => {
      expect(divide(20, -5)).toBe(-4);
    });

    test('should divide by one', () => {
      expect(divide(7, 1)).toBe(7);
    });

    test('should return zero when dividing zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide decimals', () => {
      expect(divide(10.5, 2)).toBeCloseTo(5.25);
    });

    test('should return fractional results', () => {
      expect(divide(7, 2)).toBeCloseTo(3.5);
    });

    test('should handle division by zero with error message', () => {
      expect(divide(10, 0)).toBe('Error: Cannot divide by zero');
    });

    test('should handle division of zero by zero with error message', () => {
      expect(divide(0, 0)).toBe('Error: Cannot divide by zero');
    });

    test('should handle very small divisors', () => {
      expect(divide(1, 0.001)).toBe(1000);
    });

    test('should handle large numbers in division', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });
  });

  // ============================================
  // Calculate Function Tests
  // ============================================
  describe('Calculate (main calculator function)', () => {
    test('should calculate addition correctly', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should calculate subtraction correctly', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should calculate multiplication correctly', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should calculate division correctly', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should return error for invalid operator', () => {
      expect(calculate(5, '^', 2)).toBe('Error: Invalid operator. Please use +, -, *, or /');
    });

    test('should handle all operators with negative numbers', () => {
      expect(calculate(-10, '+', -5)).toBe(-15);
      expect(calculate(-20, '-', -5)).toBe(-15);
      expect(calculate(-5, '*', -3)).toBe(15);
      expect(calculate(-20, '/', -5)).toBe(4);
    });

    test('should handle all operators with decimals', () => {
      expect(calculate(2.5, '+', 3.5)).toBe(6);
      expect(calculate(10.5, '-', 4.2)).toBeCloseTo(6.3);
      expect(calculate(2.5, '*', 4)).toBe(10);
      expect(calculate(10.5, '/', 2)).toBeCloseTo(5.25);
    });
  });

  // ============================================
  // Input Validation Tests
  // ============================================
  describe('Input Validation (isValidNumber)', () => {
    test('should recognize valid positive integers', () => {
      expect(isValidNumber('5')).toBe(true);
      expect(isValidNumber('42')).toBe(true);
    });

    test('should recognize valid negative integers', () => {
      expect(isValidNumber('-5')).toBe(true);
    });

    test('should recognize valid decimals', () => {
      expect(isValidNumber('3.14')).toBe(true);
      expect(isValidNumber('-2.5')).toBe(true);
    });

    test('should recognize zero', () => {
      expect(isValidNumber('0')).toBe(true);
    });

    test('should reject non-numeric strings', () => {
      expect(isValidNumber('abc')).toBe(false);
    });

    test('should reject empty strings', () => {
      expect(isValidNumber('')).toBe(false);
    });

    test('should reject NaN', () => {
      expect(isValidNumber('NaN')).toBe(false);
    });

    test('should reject Infinity', () => {
      expect(isValidNumber('Infinity')).toBe(false);
    });

    test('should handle leading/trailing spaces in numeric strings', () => {
      expect(isValidNumber('  5  ')).toBe(true);
    });
  });

  // ============================================
  // Edge Cases and Special Tests
  // ============================================
  describe('Edge Cases', () => {
    test('should handle very large numbers', () => {
      const largeNum = 999999999999;
      expect(add(largeNum, 1)).toBe(1000000000000);
    });

    test('should handle very small decimal numbers', () => {
      expect(multiply(0.0001, 0.0001)).toBeCloseTo(0.00000001);
    });

    test('should maintain precision with multiple operations', () => {
      let result = add(1, 2);        // 3
      result = multiply(result, 3);  // 9
      result = subtract(result, 3);  // 6
      result = divide(result, 2);    // 3
      expect(result).toBeCloseTo(3);
    });

    test('should handle negative zero', () => {
      expect(divide(0, -1)).toBe(-0);
    });
  });

  // ============================================
  // Integration Tests (Example operations from image)
  // ============================================
  describe('Integration Tests - Example Operations from Image', () => {
    test('2 + 3 should equal 5', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('10 - 4 should equal 6', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('45 * 2 should equal 90', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('20 / 5 should equal 4', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });
  });
});
