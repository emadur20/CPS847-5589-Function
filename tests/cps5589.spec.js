const { describe, it, expect } = require('@jest/globals');
const cps5589 = require('../cps5589');

describe('cps5589', () => {
  it('should multiply the input by 5', () => {
    expect(cps5589(7)).toBe(35);
  });
});