const cps5589 = require('./cps5589');

describe('cps5589', () => {
    it('should return 35 when y is 7', () => {
        expect(cps5589(7)).toBe(35);
    });
});