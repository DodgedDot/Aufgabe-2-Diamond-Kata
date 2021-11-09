const {buildCharArray} = require('./index.js')


describe('Diamond-Kata', () => {

    var result = 0

    it('should return an array with one entry', () => {
        const letter = 'A'
        result = buildCharArray(letter)
        expect(result).toStrictEqual(['A'])
    })

    it('should return an array with two entries', () => {
        const letter = 'B'
        result = buildCharArray(letter)
        expect(result).toStrictEqual(['A', 'B'])
    })

    it('should return an array from A to Z', () => {
        const letter = 'Z'
        result = buildCharArray(letter)
        expect(result).toStrictEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
    })

    it('should convert input to upper case and return an array from A to E', () => {
        const letter = 'e'
        result = buildCharArray(letter)
        expect(result).toStrictEqual(['A', 'B', 'C', 'D', 'E'])
    })
    it('should throw exception after invalid input', () => {
        const letter = '108'
        expect(() => {buildCharArray(letter)}).toThrow("Input is not a letter of the alphabet!")
    })
})