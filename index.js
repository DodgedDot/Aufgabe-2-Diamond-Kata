const {buildCharArray, buildQuadrant, buildYMirroredImage, buildXMirroredImage, diamond} = require('./diamond.js')

const diamondLetter = process.argv[2]
const replacmentLetter = process.argv[3]
const diamondArray = buildXMirroredImage(buildYMirroredImage(buildQuadrant(buildCharArray(diamondLetter))))

if(replacmentLetter != null){
    diamondArray.forEach((arrayElement) => {arrayElement.forEach((element, index) => {(element === '-') ? arrayElement[index] = replacmentLetter : null})})
}

diamond(diamondArray)

