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

module.exports = {
    buildCharArray
}