const buildCharArray = (charName) =>{
    const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let charNameUC = charName.toUpperCase()
    let indexAA = alphabetString.search(charNameUC)
    if(indexAA < 0){throw "Input is not a letter of the alphabet!"}
    let charArray = new Array(indexAA + 1)
    const alphabetArray = alphabetString.split('');
    for(let i = 0; i <= indexAA; i++){
        charArray[i] = alphabetArray[i]
    }
    // charArray.forEach((element, index) => {charArray[index] = alphabetArray[index]})
    return charArray
}

const buildQuadrant = (charArrayInput) => {
    let quadrantArray = new Array(charArrayInput.length)
    for(i = 0; i < charArrayInput.length; i++){
        quadrantArray[i] = []
        for(j = charArrayInput.length - 1; j >= 0; j--){
            quadrantArray[i][j] = (i === charArrayInput.length - 1 - j) ? charArrayInput[i] : '-'
        }
    }
    return quadrantArray
}

const buildYMirroredImage = (quadrantArrayInput) => {
    for(i = 0; i < quadrantArrayInput.length; i++){
        for(j = quadrantArrayInput.length - 2; j >= 0; j--){
            quadrantArrayInput[i].push(quadrantArrayInput[i][j])
        }
    }
    return quadrantArrayInput
}

const buildXMirroredImage = (yMirroredArrayInput) => {
    arrayToConcat = yMirroredArrayInput.map(x => x)
    arrayToConcat.reverse().shift()
    yMirroredArrayInput = yMirroredArrayInput.concat(arrayToConcat)
    return yMirroredArrayInput
}

const diamond = (ausgabeArray) => {
    let joinedLineArray = ausgabeArray.map((element) => element.join(""))
    let diamondString = joinedLineArray.join("\n")
    console.log(diamondString)

}

module.exports = {
    buildCharArray, buildQuadrant, buildYMirroredImage, buildXMirroredImage, diamond
}