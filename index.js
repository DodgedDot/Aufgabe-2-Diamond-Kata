const {diamond} = require('./diamond.js')

const diamondLetter = process.argv[2]
const replacmentLetter = process.argv[3]

if(replacmentLetter != null){
    .forEach(element => (element === '-') ? element = replacmentLetter : null)
}
diamond()