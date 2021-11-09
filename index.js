const buildCharArray = (charName) =>{
    const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let charNameUC = charName.toUpperCase()
    let indexAA = 0
    let i = 0
    var charArray = ['']
    if(alphabetArray.search(charNameUC) === -1){
        throw "Input is not a letter of the alphabet!"
    }else{
        indexAA = alphabetArray.search(charNameUC)
    }
    do{
        charArray[i] = alphabetArray[i]
        i++
    }while(i <= indexAA)
    return charArray
}

module.exports = {
    buildCharArray
}