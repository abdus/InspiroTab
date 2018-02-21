"use strict"

//   Manipulating user-name dynamically //

let userNameInput = document.getElementById("user-name-input");
let userName = document.getElementById("user-name");
let storedChromeUsername;
// chrome.storage.sync.clear(function(){
//     console.log("Success");
// });  //for clearing chrome api storage // testing purpose 

// check if chrome already stores a name in api storage
chrome.storage.sync.get('storedChromeUsername', function(data){
    if(data.storedChromeUsername == undefined){
        userNameInput.addEventListener("keypress", chechForEnterKeyAndSaveName); 
    }
    else{
        userNameInput.style.display = "none";
        userName.style.display = "inline-block";
        chrome.storage.sync.get('storedChromeUsername', function(data){
            userName.innerHTML = data.storedChromeUsername;
        })
    }
})

// function for checking enter key press and blank input field 
function chechForEnterKeyAndSaveName(e){
    if(e.keyCode == 13){
        if(userNameInput.value != ""){
            userName.innerHTML = userNameInput.value;
            userNameInput.style.display = "none";
            userName.style.display = "inline-block";
            chrome.storage.sync.set({"storedChromeUsername": userNameInput.value}, function(){
                console.log("Done saving");
            });
            document.getElementById("error-handler").style.display = "none";
        }
        else{
            document.getElementById("error-handler").style.display = "inline-block";
            document.getElementById("error-handler").innerHTML = "Fill-up input field, then press enter.";
        }
    }
}

userName.addEventListener("dblclick", changeNameofDoubleClick);

function changeNameofDoubleClick(){
    userName.style.display = "none";
    userNameInput.style.display = "inline-block";
    userNameInput.addEventListener("keypress", function(e){
        if(e.keyCode == 13){
            if(userNameInput.value != ""){
                chrome.storage.sync.set({"storedChromeUsername": userNameInput.value}, function(){
                    console.log("Done saving double click");
                });
                chrome.storage.sync.get("storedChromeUsername", function(data){
                    userName.innerHTML = data.storedChromeUsername;
                    userNameInput.style.display = "none";
                    userName.style.display = "inline-block";
                    document.getElementById("error-handler").style.display = "none";
                })
            }
            else{
                document.getElementById("error-handler").style.display = "inline-block";
                document.getElementById("error-handler").innerHTML = "Fill-up input field, then press enter.";
            }
        }
    });
}
// END 

//     display time [12 hr formet]  //

// function for getting 12 hr time 
const get12HoursTime = (timeHours) => {

	//if time is greater then 12. i.e. 13+ 
	if (timeHours > 12) {
		let time0 = timeHours - 12;
		if (time0 < 10) {
			return "0" + time0;
		} else {
			return time0;
		}
	} else {
		return timeHours;
	}
}


// minutes with a preceeding 0 if the number is a single digit 
const getMinutes = (minutes) => {
    if (minutes < 10 ) {
        return "0" + minutes;
    } else {
        return minutes;
    }
}


// function for determinig AM/PM 
const getAmPm = (timeHours) => {
    if (timeHours >= 12){
        return "PM";
    } else {
        return "AM";
    }
}

// blinking dots 
// UPDATE: made static temporarily 
const getBlinkingDots = (timeSeconds) => {
    if (timeSeconds % 2 === 0){
        return ":";
    } else {
        return ":";
    }
}

// call all of them 
const clock = () => {
    time = new Date();
    timeHours = time.getHours();
    timeHours12 = get12HoursTime(timeHours);        // refer to function
    timeMinutes = getMinutes(time.getMinutes());
    timeSeconds = time.getSeconds();
    amPM = getAmPm(timeHours);
    blinkingDots = getBlinkingDots(timeSeconds);
    let clockTime = timeHours12 + blinkingDots + timeMinutes + " " + amPM;
    document.getElementById("local-time").innerHTML = clockTime;
}
// end of functions 

// start of calling  

let time = new Date();
let timeHours = time.getHours();
let timeHours12 = get12HoursTime(timeHours);        // refer to function
let timeMinutes = getMinutes(time.getMinutes());
let timeSeconds = time.getSeconds();
let amPM = getAmPm(timeHours);
let blinkingDots = getBlinkingDots(timeSeconds);


// get all called 

clock();
setInterval(clock, 1000);


//    end of "time block"   //

