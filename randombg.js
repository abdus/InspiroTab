"use strict"

let imageFileName = randomFileName(0, 24);
let imageURL = "url('./img/bg/" + imageFileName + ".jpg')";
document.getElementById("body").style.backgroundImage = imageURL;


function randomFileName(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//   for changing backgroung image randomly //
// function randomBackground(){
//     
// };
// randomBackground();
// END of random background changer  //
