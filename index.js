const copyClip = document.querySelector('.copy')
const showReslut = document.querySelector('.show-result')
const alertEl = document.querySelector('.alert')

const passwordLength = document.getElementById('length')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('numbers')
const symbolEl = document.getElementById('symbol')
const generateEl = document.querySelector('.generate')


// copy to clipboard

copyClip.addEventListener('click',()=>{
  const texarea = document.createElement('textarea')
  texarea.value = showReslut.innerText
  texarea.select()
  navigator.clipboard.writeText(texarea.value);
  alert('password copied!')
  texarea.remove()
})

// add Event Listenesrs
generateEl.addEventListener('click',()=>{
  const length = +passwordLength.value
  const hasUpper = upperEl.checked
  const hasLower = lowerEl.checked
  const hasNumber = numberEl.checked
  const hasSymbol = symbolEl.checked
  showReslut.innerText = generatePassword(hasLower,hasNumber,hasUpper,hasSymbol,length)

})
// create functions 

function generatePassword(lower,number,upper,symbol,length){
    let generatedPassword = ''
    const typesCountes = lower+number+upper+symbol
    const typesArr = [{lower},{number},{upper},{symbol}].
    filter(item=>Object.values(item)[0])
    
    
    if(typesCountes === 0){
      return ''
    }
    for( let i = 0; i < length; i += typesCountes){
         typesArr.forEach(type=>{
          const funcName = Object.keys(type)[0]
          generatedPassword += myFunc[funcName]()
         })
    }
    const finalPassword = generatedPassword.slice(0,length)
    return finalPassword
}

function randomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

}
function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function randomNumber(){
  return Math.floor(Math.random() * 10)
}

function randomSymbol(){
  return String.fromCharCode(Math.floor(Math.random() * 6) + 33)
}


const myFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
}

// other Methods 
const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
const letterLower = "abcdefghijklmnopqrstuvwxyz"
const symbols = "~^_-@()+/.&'-"
function randomLowers(){
  return lettersUpper[(Math.floor(Math.random() * lettersUpper.length))]

}
function randomUppers(){
  return letterLower[(Math.floor(Math.random() * letterLower.length))]
}

function randomNumbers(){
  return Math.floor(Math.random() * 10)
}

function randomSymbols(){
  return symbols[(Math.floor(Math.random() * symbols.length))]
}