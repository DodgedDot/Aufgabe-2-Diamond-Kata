const {buildCharArray} = require('./index.js')


describe('Diamond-Kata', () => {

    var result = 0

    it('should return an array with one entry', () => {
        const letter = 'A'
        result = buildCharArray(letter)
        expect(result).toStrictEqual(['A'])
    })
})