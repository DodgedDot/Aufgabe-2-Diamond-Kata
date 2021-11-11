const buildCharArray = (charName) =>{
    const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let indexAA, charArray = []
    let charNameUC = charName.toUpperCase()
    if(alphabetArray.search(charNameUC) >= 0){indexAA = alphabetArray.search(charNameUC)}else{throw "Input is not a letter of the alphabet!"}
    for(let i = 0; i <= indexAA; i++){
        charArray[i] = alphabetArray[i]
    }
    return charArray
}

const buildQuadrant = (charArrayInput) => {
    let quadrantArray = [charArrayInput.length]
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

module.exports = {
    buildCharArray, buildQuadrant, buildYMirroredImage
}