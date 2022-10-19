var randomNumber1 = Math.floor((Math.random() * 6) + 1); // Dice roll 1-6.

var ImageSource1 = "images/dice" + randomNumber1 + ".png"// Creating a variable that points towards the image source.


function refreshPage(){
    window.location.reload();
}   // Function that reloads the page.

    if(randomNumber1 === 1) {
        document.querySelectorAll("img")[0].setAttribute("src", ImageSource1) 
    } else if(randomNumber1 === 2) {
        document.querySelectorAll("img")[0].setAttribute("src", ImageSource1) 
    } else if(randomNumber1 === 3) {
        document.querySelectorAll("img")[0].setAttribute("src", ImageSource1) 
    } else if(randomNumber1 === 4) {
        document.querySelectorAll("img")[0].setAttribute("src", ImageSource1) 
    } else if(randomNumber1 === 5) {
        document.querySelectorAll("img")[0].setAttribute("src", ImageSource1) 
    } else {
        document.querySelectorAll("img")[0].setAttribute("src", ImageSource1) 
    } // Setting the image from images/dice1 - dice6.png, according to the number drawn on line 1.


var randomNumber2 = Math.floor((Math.random() * 6) + 1); 

var ImageSource2 = "images/dice" + randomNumber2 + ".png";

    if(randomNumber2 === 1) {
        document.querySelectorAll("img")[1].setAttribute("src", ImageSource2) 
    } else if(randomNumber2 === 2) {
        document.querySelectorAll("img")[1].setAttribute("src", ImageSource2) 
    } else if(randomNumber2 === 3) {
        document.querySelectorAll("img")[1].setAttribute("src", ImageSource2) 
    } else if(randomNumber2 === 4) {
        document.querySelectorAll("img")[1].setAttribute("src", ImageSource2) 
    } else if(randomNumber2 === 5) {
        document.querySelectorAll("img")[1].setAttribute("src", ImageSource2) 
    } else {
        document.querySelectorAll("img")[1].setAttribute("src", ImageSource2) 
    } 


    if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "😱 DRAW!"
} // Changing h1 to the winner/draw.