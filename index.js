const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//create a function that generates two random passwords
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")


function generatePassword(){
    let randomString =" "
    for (let i = 0; i < characters.length; i++){
      let randomIndex = Math.floor( Math.random()*characters.length )
    randomString += characters[randomIndex]
    let truncatedString = randomString.slice(0,10)
    passwordOne.textContent = truncatedString
    }
    
    
   let randomStringTwo = ""
    for (let i = 0; i < characters.length; i++){
        let randomIndexTwo = Math.floor(Math.random()*characters.length)
        randomStringTwo += characters[randomIndexTwo]
        let truncatedStringTwo = randomStringTwo.slice(0,10)
        passwordTwo.textContent = truncatedStringTwo
    }     

}




