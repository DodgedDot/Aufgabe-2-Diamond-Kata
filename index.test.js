const {buildCharArray, buildQuadrant, buildYMirroredImage, buildXMirroredImage} = require('./index.js')


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

//b--------------------------------------------------
    it('should return an array of three arrays, one for each letter in the input array (A-C)', () => {
        const letterArray = buildCharArray('C')
        result = buildQuadrant(letterArray)
        expect(result).toStrictEqual([['-', '-', 'A'], ['-', 'B', '-'], ['C', '-', '-']])
    })
    it('should return an array of four arrays, one for each letter in the input array (A-D)', () => {
        const letterArray = buildCharArray('D')
        result = buildQuadrant(letterArray)
        expect(result).toStrictEqual([['-', '-', '-', 'A'], ['-', '-', 'B', '-'], ['-', 'C', '-', '-'], ['D', '-', '-', '-']])
    })
    
//c--------------------------------------------------
    it('should return an array of three arrays containing the input arrays extended by their mirrored values', () => {
        const letterArray = buildCharArray('C')
        quadrantArray = buildQuadrant(letterArray)
        yMirroredArray = buildYMirroredImage(quadrantArray)
        expect(yMirroredArray).toStrictEqual([['-', '-', 'A', '-', '-'], ['-', 'B', '-', 'B', '-'], ['C', '-', '-', '-', 'C']])
    })
    it('should return an array of four arrays containing the input arrays extended by their mirrored values', () => {
        const letterArray = buildCharArray('D')
        quadrantArray = buildQuadrant(letterArray)
        yMirroredArray = buildYMirroredImage(quadrantArray)
        expect(yMirroredArray).toStrictEqual([['-', '-', '-', 'A', '-', '-', '-'], ['-', '-', 'B', '-', 'B', '-', '-'], ['-', 'C', '-', '-', '-', 'C', '-'], ['D', '-', '-', '-', '-', '-', 'D']])
    })

//d--------------------------------------------------
    it('should return an array of five arrays containing the input arrays and the first two in mirrored sequence', () => {
        const letterArray = buildCharArray('C')
        quadrantArray = buildQuadrant(letterArray)
        yMirroredArray = buildYMirroredImage(quadrantArray)
        xMirroredArray = buildXMirroredImage(yMirroredArray)
        expect(xMirroredArray).toStrictEqual([['-', '-', 'A', '-', '-'], ['-', 'B', '-', 'B', '-'], ['C', '-', '-', '-', 'C'], ['-', 'B', '-', 'B', '-'], ['-', '-', 'A', '-', '-']])
    })
    it('should return an array of seven arrays containing the input arrays and the first three in mirrored sequence', () => {
        const letterArray = buildCharArray('D')
        quadrantArray = buildQuadrant(letterArray)
        yMirroredArray = buildYMirroredImage(quadrantArray)
        xMirroredArray = buildXMirroredImage(yMirroredArray)
        expect(xMirroredArray).toEqual([['-', '-', '-', 'A', '-', '-', '-'], ['-', '-', 'B', '-', 'B', '-', '-'], ['-', 'C', '-', '-', '-', 'C', '-'], ['D', '-', '-', '-', '-', '-', 'D'], ['-', 'C', '-', '-', '-', 'C', '-'], ['-', '-', 'B', '-', 'B', '-', '-'], ['-', '-', '-', 'A', '-', '-', '-']])
    })
    
})